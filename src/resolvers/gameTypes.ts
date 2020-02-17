import { QueryResult } from "pg";
import { pool } from "../db";
import { GameType } from "../types";

export const getGameTypes = async (): Promise<GameType[]> => {
  const results: QueryResult<GameType> = await pool.query<GameType>('SELECT * FROM "GameTypes" ORDER BY id ASC');
  return results.rows;
};

export const getGameType = async (id: string): Promise<GameType> => {
  const results: QueryResult<GameType> = await pool.query<GameType>(`SELECT * FROM "GameTypes" WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    gameTypes: getGameTypes,
    gameType: async (_: unknown, { id }: { id: string }): Promise<GameType> => getGameType(id),
  },
};
