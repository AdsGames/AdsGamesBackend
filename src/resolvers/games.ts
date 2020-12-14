import type { QueryResult } from "pg";
import { pool } from "../db";
import type { Control, Game, GameType, FeaturedGame } from "../types";

import { getGameType } from "./gameTypes";
import { getControlsForGame } from "./controls";

export const getGames = async (): Promise<Game[]> => {
  const results: QueryResult<Game> = await pool.query<Game>('SELECT * FROM "Games" ORDER BY id ASC');
  return results.rows;
};

export const getGame = async (id: string): Promise<Game> => {
  const results: QueryResult<Game> = await pool.query<Game>(`SELECT * FROM "Games" WHERE id = '${id}'`);
  return results.rows[0];
};

export const getFeaturedGames = async (): Promise<FeaturedGame[]> => {
  const results: QueryResult<FeaturedGame> = await pool.query<FeaturedGame>('SELECT * FROM "FeaturedGames"');
  return results.rows;
};

export default {
  Query: {
    games: getGames,
    game: async (_: unknown, { id }: { id: string }): Promise<Game> => getGame(id),
    featuredGames: getFeaturedGames,
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
