/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
import AWS from "aws-sdk";
import { v4 } from "uuid";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyHandlerV2,
} from "aws-lambda";
import * as Jimp from "jimp";
import * as MultipartParser from "lambda-multipart-parser";

const s3 = new AWS.S3();

const BUCKET_ID = process.env.IMAGE_BUCKET ?? "";

const getErrorMessage = (
  message: string
): { statusCode: number; body: string } => ({
  statusCode: 500,
  body: JSON.stringify({ message }),
});

const uploadToS3 = async (
  key: string,
  buffer: Buffer,
  mimeType: string
): Promise<AWS.S3.ManagedUpload.SendData> =>
  s3
    .upload({
      Bucket: BUCKET_ID,
      Key: key,
      Body: buffer,
      ContentType: mimeType,
    })
    .promise();

const resize = async (
  buffer: Buffer,
  mimeType: string,
  width: number
): Promise<Buffer> => {
  const image = await Jimp.read(buffer);
  return image.resize(width, Jimp.AUTO).quality(70).getBufferAsync(mimeType);
};

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const data = await MultipartParser.parse(
      (event as unknown) as APIGatewayProxyEvent
    );
    const [file] = data.files;

    if (typeof file === "undefined") {
      return getErrorMessage("No file provided");
    }

    const uid = v4();
    const originalKey = `${uid}_original`;
    const thumbnailKey = `${uid}_thumbnail`;

    const resizedFile = await resize(file.content, file.contentType, 460);
    const [originalFile, thumbnailFile] = await Promise.all([
      uploadToS3(originalKey, file.content, file.contentType),
      uploadToS3(thumbnailKey, resizedFile, file.contentType),
    ]);

    const signedOriginalUrl = s3.getSignedUrl("getObject", {
      Bucket: originalFile.Bucket,
      Key: originalKey,
      Expires: 60000,
    });

    const signedThumbnailUrl = s3.getSignedUrl("getObject", {
      Bucket: thumbnailFile.Bucket,
      Key: thumbnailKey,
      Expires: 60000,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: uid,
        mimeType: file.contentType,
        originalKey: originalFile.Key,
        thumbnailKey: thumbnailFile.Key,
        bucket: originalFile.Bucket,
        originalUrl: signedOriginalUrl,
        thumbnailUrl: signedThumbnailUrl,
        originalSize: file.content.length,
        thumbnailSize: resizedFile.length,
      }),
    };
  } catch (error: unknown) {
    return getErrorMessage(JSON.stringify(error));
  }
};
