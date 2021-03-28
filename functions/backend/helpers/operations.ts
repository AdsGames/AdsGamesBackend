import { ApolloError } from "apollo-server-errors";
import type {
  GetItemInput,
  PutItemInput,
  QueryInput,
  ScanInput,
} from "aws-sdk/clients/dynamodb";
import { Converter } from "aws-sdk/clients/dynamodb";

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
    return results.Items.map((item) => Converter.unmarshall(item)) as T[];
  } catch (error: unknown) {
    throw new ApolloError(JSON.stringify(error));
  }
};

/**
 * Helper that types gets and promisifies them
 * @param input Get input
 * @returns Item of type T
 */
export const get = async <T>(input: GetItemInput): Promise<T | null> => {
  try {
    const result = await client.getItem(input).promise();

    if (typeof result.Item === "undefined") {
      return null;
    }

    return Converter.unmarshall(result.Item) as T;
  } catch (error: unknown) {
    throw new ApolloError(JSON.stringify(error));
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

    return results.Items.map((item) => Converter.unmarshall(item)) as T[];
  } catch (error: unknown) {
    throw new ApolloError(JSON.stringify(error));
  }
};

/**
 * Helper that types puts and promisifies them
 * @param input Put input
 * @returns Array of type T
 */
export const put = async (input: PutItemInput): Promise<boolean> => {
  try {
    await client.putItem(input).promise();
    return true;
  } catch (error: unknown) {
    throw new ApolloError(JSON.stringify(error));
  }
};
