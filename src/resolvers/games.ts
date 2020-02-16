import { QueryResult } from "pg";
import { pool } from "../db";
import { Game } from "../types";

export const getGames = async () => {
  const results: QueryResult<any> = await pool.query("SELECT * FROM games ORDER BY id ASC");
  return results.rows;
};

export const getGame = async (_: any, { id }: Partial<Game>) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM games WHERE id = ${id}`);
  return results.rows[0];
};

export default {
  Query: {
    getGames,
    getGame,
  },
};
