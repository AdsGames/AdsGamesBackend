import type {
  GetItemInput,
  QueryInput,
  ScanInput,
} from "aws-sdk/clients/dynamodb";

import { client } from "../db";

/**
 * Helper that types scans and promisifies them
 * @param input Scan input
 * @returns Array of type T
 */
export const scan = async <T>(input: ScanInput): Promise<T[]> => {
  try {
    const results = await client.scan(input).promise();

    if (typeof results.Items === "undefined") {
      return [];
    }

    return results.Items as T[];
  } catch (_error: unknown) {
    console.log(_error);

    return [];
  }
};

/**
 * Helper that types gets and promisifies them
 * @param input Get input
 * @returns Item of type T
 */
export const get = async <T>(input: GetItemInput): Promise<T | null> => {
  try {
    const results = await client.get(input).promise();

    if (typeof results.Item === "undefined") {
      return null;
    }

    return results.Item as T;
  } catch (_error: unknown) {
    return null;
  }
};

/**
 * Helper that types queries and promisifies them
 * @param input Query input
 * @returns Array of type T
 */
export const query = async <T>(input: QueryInput): Promise<T[]> => {
  try {
    const results = await client.query(input).promise();

    if (typeof results.Items === "undefined") {
      return [];
    }

    return results.Items as T[];
  } catch (_error: unknown) {
    return [];
  }
};
