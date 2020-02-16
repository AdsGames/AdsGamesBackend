import { QueryResult } from "pg";
import { pool } from "../db";
import { ControlType } from "../types";

export const getControlTypes = async () => {
  const results: QueryResult<ControlType> = await pool.query("SELECT * FROM control_types ORDER BY id ASC");
  return results.rows;
};

export const getControlType = async (_: any, { id }: Partial<ControlType>) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM control_types WHERE id = ${id}`);
  return results.rows[0];
};

export default {
  Query: {
    getControlTypes,
    getControlType,
  },
};
