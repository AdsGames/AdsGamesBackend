import { QueryResult } from "pg";
import { pool } from "../db";
import { User } from "../types";

export const getUsers = async () => {
  const results: QueryResult<any> = await pool.query("SELECT * FROM users ORDER BY id ASC");
  return results.rows;
};

export const getUser = async (_: any, { id }: Partial<User>) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
  return results.rows[0];
};

export default {
  Query: {
    getUsers,
    getUser,
  },
};
