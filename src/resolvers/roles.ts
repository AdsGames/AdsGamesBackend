import { QueryResult } from "pg";
import { pool } from "../db";
import { Role } from "../types";

export const getRoles = async () => {
  const results: QueryResult<any> = await pool.query('SELECT * FROM "Roles" ORDER BY id ASC');
  return results.rows;
};

export const getRole = async (id: string) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM "Roles" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    roles: getRoles,
    role: (_: any, { id }: Role) => getRole(id),
  },
};
