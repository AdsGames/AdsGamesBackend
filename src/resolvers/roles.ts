import { QueryResult } from "pg";
import { pool } from "../db";
import { Role } from "../types";

export const getRoles = async () => {
  const results: QueryResult<any> = await pool.query("SELECT * FROM roles ORDER BY id ASC");
  return results.rows;
};

export const getRole = async (_: any, { id }: Partial<Role>) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM roles WHERE id = ${id}`);
  return results.rows[0];
};

export default {
  Query: {
    getRoles,
    getRole,
  },
};
