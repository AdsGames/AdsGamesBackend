import { QueryResult } from "pg";
import { pool } from "../db";
import { GameType } from "../types";

export const getGameTypes = async () => {
  const results: QueryResult<any> = await pool.query("SELECT * FROM game_types ORDER BY id ASC");
  return results.rows;
};

export const getGameType = async (_: any, { id }: Partial<GameType>) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM game_types WHERE id = ${id}`);
  return results.rows[0];
};

export default {
  Query: {
    getGameTypes,
    getGameType,
  },
};
