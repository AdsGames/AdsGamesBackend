import type {
  Control,
  Game,
  FeaturedGame,
  GameImage,
  GameFile,
} from "../types";
import { get, scan, query } from "../helpers/operations";
import { TABLES } from "../constants/tables";

const getGames = async (): Promise<Game[]> => {
  return scan<Game>({ TableName: TABLES.GAMES });
};

const getGame = async (id: string): Promise<Game | null> => {
  return get<Game>({ TableName: TABLES.GAMES, Key: { id: { S: id } } });
};

const getFeaturedGames = async (): Promise<FeaturedGame[]> => {
  return scan<FeaturedGame>({ TableName: TABLES.FEATURED_GAMES });
};

const getImagesForGame = async (id: string): Promise<GameImage[]> => {
  return query<GameImage>({
    TableName: TABLES.GAME_IMAGES,
    FilterExpression: "game_id = :value",
    ExpressionAttributeValues: { ":value": { S: id } },
  });
};

const getFilesForGame = async (id: string): Promise<GameFile[]> => {
  return query<GameFile>({
    TableName: TABLES.GAME_FILES,
    FilterExpression: "game_id = :value",
    ExpressionAttributeValues: { ":value": { S: id } },
  });
};

const getControls = async (): Promise<Control[]> => {
  return scan<Control>({ TableName: TABLES.GAME_CONTROLS });
};

const getControlsForGame = async (id: string): Promise<Control[]> => {
  return query<Control>({
    TableName: TABLES.GAME_CONTROLS,
    FilterExpression: "game_id = :value",
    ExpressionAttributeValues: {
      ":value": { S: id },
    },
  });
};

export const resolvers = {
  Query: {
    games: getGames,
    game: async (_: unknown, { id }: { id: string }): Promise<Game | null> =>
      getGame(id),
    featuredGames: getFeaturedGames,
    controls: getControls,
  },
  Game: {
    async controls(game: Game): Promise<Control[]> {
      return getControlsForGame(game.id);
    },
    async images(game: Game): Promise<GameImage[]> {
      return getImagesForGame(game.id);
    },
    async files(game: Game): Promise<GameFile[]> {
      return getFilesForGame(game.id);
    },
  },
};
