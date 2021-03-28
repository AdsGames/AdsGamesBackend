/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
import AWS from "aws-sdk";
import { v4 } from "uuid";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyHandlerV2,
} from "aws-lambda";
import * as MultipartParser from "lambda-multipart-parser";

const s3 = new AWS.S3();

const BUCKET_ID = process.env.FILE_BUCKET ?? "";

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
    const key = `${uid}_original`;

    const originalFile = await uploadToS3(key, file.content, file.contentType);

    const signedOriginalUrl = s3.getSignedUrl("getObject", {
      Bucket: originalFile.Bucket,
      Key: key,
      Expires: 60000,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: uid,
        mimeType: file.contentType,
        key: originalFile.Key,
        bucket: originalFile.Bucket,
        url: signedOriginalUrl,
        size: file.content.length,
      }),
    };
  } catch (error: unknown) {
    return getErrorMessage(JSON.stringify(error));
  }
};
