import { QueryResult } from "pg";
import { pool } from "../db";
import { Control, Game, GameType } from "../types";

import { getGameType } from "./gameTypes";
import { getControlsForGame } from "./controls";

export const getGames = async (): Promise<Game[]> => {
  const results: QueryResult<Game> = await pool.query<Game>('SELECT * FROM "Games" ORDER BY id ASC');
  return results.rows;
};

export const getGame = async (id: string): Promise<Game> => {
  const results: QueryResult<Game> = await pool.query<Game>(`SELECT * FROM 'Games' WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    games: getGames,
    game: async (_: unknown, { id }: { id: string }): Promise<Game> => getGame(id),
  },
  Game: {
    async type(game: Game): Promise<GameType> {
      return getGameType(game.typeId);
    },
    async controls(game: Game): Promise<Control[]> {
      return getControlsForGame(game.id);
    },
  },
};
