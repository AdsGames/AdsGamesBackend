import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Control {
    game_id: ID!
    type: String!
    description: String!
  }

  type GameImage {
    game_id: ID!
    type: String!
    url: String!
  }

  type GameFile {
    game_id: ID!
    platform: String!
    url: String!
  }

  type Game {
    id: ID!
    short_name: String!
    name: String!
    description: String!
    visible: Boolean
    controls: [Control!]!
    images: [GameImage!]!
    files: [GameFile!]!
  }

  type FeaturedGame {
    game_id: ID!
    place: Int!
  }

  type Role {
    id: ID!
    name: String!
    shortName: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role_id: ID!
    avatar: String
    about: String
    website: String
    location: String
    role: Role!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    roles: [Role!]!
    role(id: String!): Role
    games: [Game!]!
    game(id: String!): Game
    featuredGames: [FeaturedGame!]!
    controls: [Control!]!
  }

  type Mutation {
    _empty: String
  }
`;
