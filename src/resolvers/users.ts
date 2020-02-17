import { QueryResult } from "pg";
import { pool } from "../db";
import { User } from "../types";

import { getRole } from "./roles";

export const getUsers = async () => {
  const results: QueryResult<any> = await pool.query('SELECT * FROM "Users" ORDER BY id ASC');
  return results.rows;
};

export const getUser = async (id: string) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM "Users" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    users: getUsers,
    user: (_: any, { id }: User) => getUser(id),
  },
  User: {
    role(user: User) {
      return getRole(user.roleId);
    },
  },
};
