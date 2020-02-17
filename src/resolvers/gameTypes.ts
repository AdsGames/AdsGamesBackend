import { QueryResult } from "pg";
import { pool } from "../db";
import { GameType } from "../types";

export const getGameTypes = async () => {
  const results: QueryResult<any> = await pool.query('SELECT * FROM "GameTypes" ORDER BY id ASC');
  return results.rows;
};

export const getGameType = async (id: string) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM "GameTypes" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    gameTypes: getGameTypes,
    gameType: (_: any, { id }: GameType) => getGameType(id),
  },
};
