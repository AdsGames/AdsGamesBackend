import { QueryResult } from "pg";
import { pool } from "../db";
import { Control } from "../types";

export const getControls = async () => {
  const results: QueryResult<Control> = await pool.query("SELECT * FROM controls");
  return results.rows;
};

export default {
  Query: {
    getControls,
  },
};
