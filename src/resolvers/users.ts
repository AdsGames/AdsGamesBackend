import { QueryResult } from "pg";
import { pool } from "../db";
import { Role, User } from "../types";

import { getRole } from "./roles";

export const getUsers = async (): Promise<User[]> => {
  const results: QueryResult<User> = await pool.query<User>('SELECT * FROM "Users" ORDER BY id ASC');
  return results.rows;
};

export const getUser = async (id: string): Promise<User> => {
  const results: QueryResult<User> = await pool.query<User>(`SELECT * FROM "Users" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    users: getUsers,
    user: async (_: unknown, { id }: { id: string }): Promise<User> => getUser(id),
  },
  User: {
    async role(user: User): Promise<Role> {
      return getRole(user.roleId);
    },
  },
};
