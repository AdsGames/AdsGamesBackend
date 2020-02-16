export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Control = {
   __typename?: 'Control',
  game_id: Scalars['String'],
  control_id: Scalars['String'],
  description: Scalars['String'],
};

export type ControlType = {
   __typename?: 'ControlType',
  id: Scalars['String'],
  name: Scalars['String'],
  short_name: Scalars['String'],
  image: Scalars['String'],
};

export type Game = {
   __typename?: 'Game',
  id: Scalars['String'],
  short_name: Scalars['String'],
  name: Scalars['String'],
  description: Scalars['String'],
  type_id: Scalars['String'],
  source?: Maybe<Scalars['String']>,
  file?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  version?: Maybe<Scalars['String']>,
  visible?: Maybe<Scalars['Boolean']>,
  controller?: Maybe<Scalars['Int']>,
};

export type GameType = {
   __typename?: 'GameType',
  id: Scalars['String'],
  name: Scalars['String'],
  description: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  getControlTypes: Array<Maybe<ControlType>>,
  getControlType?: Maybe<ControlType>,
  getControls: Array<Maybe<Control>>,
  getGameTypes: Array<Maybe<GameType>>,
  getGameType?: Maybe<GameType>,
  getGames: Array<Maybe<Game>>,
  getGame?: Maybe<Game>,
  getRoles: Array<Maybe<Role>>,
  getRole?: Maybe<Role>,
  getUsers: Array<Maybe<User>>,
  getUser?: Maybe<User>,
};


export type QueryGetControlTypeArgs = {
  id: Scalars['Int']
};


export type QueryGetGameTypeArgs = {
  id: Scalars['Int']
};


export type QueryGetGameArgs = {
  id: Scalars['Int']
};


export type QueryGetRoleArgs = {
  id: Scalars['Int']
};


export type QueryGetUserArgs = {
  id: Scalars['Int']
};

export type Role = {
   __typename?: 'Role',
  id: Scalars['String'],
  name: Scalars['String'],
  short_name: Scalars['String'],
};


export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
  role_id: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
  about?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
};
