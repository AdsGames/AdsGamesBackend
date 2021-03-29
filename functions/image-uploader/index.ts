import AWS from "aws-sdk";
import { v4 } from "uuid";
import * as Jimp from "jimp";
import * as FileType from "file-type";

import type { FileTypeResult } from "file-type";
import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

const s3 = new AWS.S3();

const BUCKET_ID = process.env.IMAGE_BUCKET ?? "";
const MAX_SIZE = 1000000;
const MIME_TYPES = ["image/jpeg", "image/png"];

/**
 * Upload to S3
 * @param key S3 Key for S3
 * @param buffer File buffer to upload
 * @param mimeType Type of file
 * @returns Promise to S3 SendData
 */
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
      ACL: "public-read",
    })
    .promise();

/**
 * Resize an image
 * @param buffer Image buffer to resize
 * @param mimeType Mime type of bufferf
 * @param width Width to size to
 * @returns Resized image buffer
 */
const resize = async (
  buffer: Buffer,
  mimeType: string,
  width: number
): Promise<Buffer> => {
  const image = await Jimp.read(buffer);
  return image.resize(width, Jimp.AUTO).quality(70).getBufferAsync(mimeType);
};

/**
 * Validate types
 * @param mime Mime type of file
 * @param size Size of buffer
 * @returns true if valid, false if invalid
 */
const validateType = (mime: string, size: number): boolean =>
  MIME_TYPES.includes(mime) && size < MAX_SIZE;

/**
 * Create files
 * @param type Type from file-type
 * @param buffer File buffer
 * @returns Object containing original file and thumbnail file
 */
const createFiles = async (
  type: FileTypeResult,
  buffer: Buffer
): Promise<{
  originalFile: AWS.S3.ManagedUpload.SendData;
  thumbnailFile: AWS.S3.ManagedUpload.SendData;
}> => {
  const uid = v4();
  const originalKey = `original/${uid}.${type.ext}`;
  const thumbnailKey = `thumbnail/${uid}.${type.ext}`;

  const resizedBuffer = await resize(buffer, type.mime, 460);

  const [originalFile, thumbnailFile] = await Promise.all([
    uploadToS3(originalKey, buffer, type.mime),
    uploadToS3(thumbnailKey, resizedBuffer, type.mime),
  ]);

  return { originalFile, thumbnailFile };
};

/**
 * Validate and get file information
 * @param body Body from lambda event
 * @returns Buffer and file metadata
 */
const validateFile = async (
  body: string | undefined
): Promise<{ buffer: Buffer; type: FileTypeResult }> => {
  if (typeof body === "undefined") {
    throw Error("Must provide file");
  }

  const buffer = Buffer.from(body, "base64");
  const type = await FileType.fromBuffer(buffer);

  if (typeof type === "undefined") {
    throw Error("Could not determine type of file");
  }

  if (!validateType(type.mime, buffer.length)) {
    throw Error(
      `Invalid image mime type. Must be of type ${MIME_TYPES.join(
        ", "
      )} and less than size ${MAX_SIZE}`
    );
  }

  return { buffer, type };
};

/**
 * Image Uploader Handler
 * @param event API Gateway Event
 * @returns Status object
 */
export const handler: APIGatewayProxyHandlerV2<void> = async (
  event,
  _context,
  callback
) => {
  try {
    const { buffer, type } = await validateFile(event.body);

    const { originalFile, thumbnailFile } = await createFiles(type, buffer);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        mimeType: type.mime,
        key: originalFile.Key,
        thumbnailKey: thumbnailFile.Key,
        url: originalFile.Location,
        thumbnailUrl: thumbnailFile.Location,
      }),
    });
  } catch (error: unknown) {
    callback((error as Error).message);
  }
};
