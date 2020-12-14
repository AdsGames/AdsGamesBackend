import type { QueryResult } from "pg";
import { pool } from "../db";
import type { Role } from "../types";

export const getRoles = async (): Promise<Role[]> => {
  const results: QueryResult<Role> = await pool.query<Role>('SELECT * FROM "Roles" ORDER BY id ASC');
  return results.rows;
};

export const getRole = async (id: string): Promise<Role> => {
  const results: QueryResult<Role> = await pool.query<Role>(`SELECT * FROM "Roles" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    roles: getRoles,
    role: async (_: unknown, { id }: { id: string }): Promise<Role> => getRole(id),
  },
};
