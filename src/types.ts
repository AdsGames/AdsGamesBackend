export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type Control = {
  __typename?: "Control";
  gameId: Scalars["ID"];
  controlId: Scalars["ID"];
  description: Scalars["String"];
  control: ControlType;
};

export type ControlType = {
  __typename?: "ControlType";
  id: Scalars["ID"];
  name: Scalars["String"];
  shortName: Scalars["String"];
  image: Scalars["String"];
};

export type FeaturedGame = {
  __typename?: "FeaturedGame";
  gameId: Scalars["String"];
  place: Scalars["Int"];
};

export type Game = {
  __typename?: "Game";
  id: Scalars["ID"];
  shortName: Scalars["String"];
  name: Scalars["String"];
  description: Scalars["String"];
  typeId: Scalars["ID"];
  source?: Maybe<Scalars["String"]>;
  file?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  version?: Maybe<Scalars["String"]>;
  visible?: Maybe<Scalars["Boolean"]>;
  controller?: Maybe<Scalars["Int"]>;
  type: GameType;
  controls: Array<Control>;
};

export type GameType = {
  __typename?: "GameType";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  controlTypes: Array<ControlType>;
  controlType?: Maybe<ControlType>;
  controls: Array<Control>;
  gameTypes: Array<GameType>;
  gameType?: Maybe<GameType>;
  games: Array<Game>;
  game?: Maybe<Game>;
  featuredGames: Array<FeaturedGame>;
  roles: Array<Role>;
  role?: Maybe<Role>;
  users: Array<User>;
  user?: Maybe<User>;
};

export type QueryControlTypeArgs = {
  id: Scalars["String"];
};

export type QueryGameTypeArgs = {
  id: Scalars["String"];
};

export type QueryGameArgs = {
  id: Scalars["String"];
};

export type QueryRoleArgs = {
  id: Scalars["String"];
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type Role = {
  __typename?: "Role";
  id: Scalars["ID"];
  name: Scalars["String"];
  shortName: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  roleId: Scalars["ID"];
  avatar?: Maybe<Scalars["String"]>;
  about?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  role: Role;
};
