/* eslint-disable max-statements */
import AWS from "aws-sdk";
import { v4 } from "uuid";
import * as FileType from "file-type";

import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

const s3 = new AWS.S3();

const BUCKET_ID = process.env.FILE_BUCKET ?? "";

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
 * File Uploader Handler
 * @param event API Gateway Event
 * @returns Status object
 */
export const handler: APIGatewayProxyHandlerV2<void> = async (
  event,
  _context,
  callback
) => {
  try {
    if (typeof event.body !== "string") {
      throw Error("Must provide file");
    }

    const buffer = Buffer.from(event.body, "base64");
    const type = await FileType.fromBuffer(buffer);

    if (typeof type === "undefined") {
      throw Error("Could not detect content type");
    }

    const key = `${v4()}${type.ext}`;

    const originalFile = await uploadToS3(key, buffer, type.mime);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        mimeType: type.mime,
        size: buffer.length,
        key: originalFile.Key,
        bucket: originalFile.Bucket,
        url: originalFile.Location,
      }),
    });
  } catch (error: unknown) {
    callback(JSON.stringify(error));
  }
};
