import { QueryResult } from "pg";
import { pool } from "../db";
import { ControlType } from "../types";

export const getControlTypes = async () => {
  const results: QueryResult<any> = await pool.query('SELECT * FROM "ControlTypes" ORDER BY id ASC');
  return results.rows;
};

export const getControlType = async (id: string) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM "ControlTypes" WHERE id = '${id}'`);
  console.log(id);
  return results.rows[0];
};

export default {
  Query: {
    controlTypes: getControlTypes,
    controlType: (_: any, { id }: ControlType) => getControlType(id),
  },
};
