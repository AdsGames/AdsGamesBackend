export type ControlType = {
  id: string;
  name: string;
  short_name: string;
  image: string;
};

export type Control = {
  game_id: string;
  description: string;
  type: string;
};

export type GameImage = {
  game_id: string;
  type: "thumbnail" | "wide" | "large";
  url: string;
};

export type GameFile = {
  game_id: string;
  platform: "windows" | "mac" | "linux" | "web" | "source";
  url: string;
};

export type Game = {
  id: string;
  short_name: string;
  name: string;
  description: string;
  visible: boolean;
  controls: Array<Control>;
  images: Array<GameImage>;
  files: Array<GameFile>;
};

export type FeaturedGame = {
  game_id: string;
  place: number;
};
