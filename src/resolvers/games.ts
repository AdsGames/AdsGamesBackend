import { client } from "../db";
import type { Control, Game, GameType, FeaturedGame, GameImage } from "../types";

export const getControls = async (): Promise<Control[]> => {
  return client.select().table<Control>("control");
};

export const getControlsForGame = async (id: string): Promise<Control[]> => {
  return client.select().table<Control>("control").where("game_id", id);
};

export const getGameTypes = async (): Promise<GameType[]> => {
  return client.select().table<GameType>("game_type").orderBy("id", "asc");
};

export const getGameType = async (id: string): Promise<GameType | undefined> => {
  return client.select().table<GameType>("game_type").where("id", id).first();
};

export const getGames = async (): Promise<Game[]> => {
  return client.select().table<Game>("game").orderBy("id", "asc");
};

export const getGame = async (id: string): Promise<Game | undefined> => {
  return client.select().table<Game>("game").where("id", id).first();
};

export const getFeaturedGames = async (): Promise<FeaturedGame[]> => {
  return client.select().table<FeaturedGame>("featured_game");
};

export const getImagesForGame = async (id: string): Promise<GameImage[]> => {
  return client.select().table<GameImage>("game_image").where("game_id", id);
};

export default {
  Query: {
    games: getGames,
    game: async (_: unknown, { id }: { id: string }): Promise<Game | undefined> => getGame(id),
    featuredGames: getFeaturedGames,
    gameTypes: getGameTypes,
    gameType: async (_: unknown, { id }: { id: string }): Promise<GameType | undefined> => getGameType(id),
    controls: getControls,
  },
  Game: {
    async type(game: Game): Promise<GameType | undefined> {
      return getGameType(game.type_id);
    },
    async controls(game: Game): Promise<Control[]> {
      return getControlsForGame(game.id);
    },
    async images(game: Game): Promise<GameImage[]> {
      return getImagesForGame(game.id);
    },
  },
};
