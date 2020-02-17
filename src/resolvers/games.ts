import { QueryResult } from "pg";
import { pool } from "../db";
import { Game } from "../types";

import { getGameType } from "./gameTypes";
import { getControlsForGame } from "./controls";

export const getGames = async () => {
  const results: QueryResult<any> = await pool.query('SELECT * FROM "Games" ORDER BY id ASC');
  return results.rows;
};

export const getGame = async (id: string) => {
  const results: QueryResult<any> = await pool.query(`SELECT * FROM 'Games' WHERE id = '${id}'`);
  return results.rows[0];
};

export default {
  Query: {
    games: getGames,
    game: (_: any, { id }: Game) => getGame(id),
  },
  Game: {
    type(game: Game) {
      return getGameType(game.typeId);
    },
    controls(game: Game) {
      return getControlsForGame(game.id);
    },
  },
};
