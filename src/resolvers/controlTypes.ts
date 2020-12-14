import type { QueryResult } from "pg";
import { pool } from "../db";
import type { ControlType } from "../types";

export const getControlTypes = async (): Promise<ControlType[]> => {
  const results: QueryResult<ControlType> = await pool.query<ControlType>('SELECT * FROM "ControlTypes" ORDER BY id ASC');
  return results.rows;
};

export const getControlType = async (id: string): Promise<ControlType> => {
  const results: QueryResult<ControlType> = await pool.query<ControlType>(`SELECT * FROM "ControlTypes" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    controlTypes: getControlTypes,
    controlType: async (_: unknown, { id }: { id: string }): Promise<ControlType> => getControlType(id),
  },
};
