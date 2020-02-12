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

export type Query = {
   __typename?: 'Query',
  getUsers?: Maybe<Array<Maybe<User>>>,
  getUser?: Maybe<User>,
};


export type QueryGetUserArgs = {
  id: Scalars['Int']
};


export type User = {
   __typename?: 'User',
  email?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  id: Scalars['String'],
};
