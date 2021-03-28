export interface ControlType {
  id: string;
  name: string;
  short_name: string;
  image: string;
}

export interface Control {
  game_id: string;
  description: string;
  type: string;
}

export interface GameImage {
  game_id: string;
  type: "large" | "thumbnail" | "wide";
  url: string;
}

export interface GameFile {
  game_id: string;
  platform: "linux" | "mac" | "source" | "web" | "windows";
  url: string;
}

export interface Game {
  id: string;
  short_name: string;
  name: string;
  description: string;
  visible: boolean;
  controls: Control[];
  images: GameImage[];
  files: GameFile[];
}

export interface FeaturedGame {
  game_id: string;
  place: number;
}
