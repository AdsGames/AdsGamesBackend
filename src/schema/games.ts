import { gql } from "apollo-server";

export default gql`
  type GameType {
    id: ID!
    name: String!
    description: String!
  }

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

  type Game {
    id: ID!
    short_name: String!
    name: String!
    description: String!
    type_id: ID!
    source: String
    file: String
    width: Int
    height: Int
    version: String
    visible: Boolean
    controller: Int
    type: GameType!
    controls: [Control!]!
    images: [GameImage!]!
  }

  type FeaturedGame {
    game_id: ID!
    place: Int!
  }

  type Query {
    games: [Game!]!
    game(id: String!): Game
    featuredGames: [FeaturedGame!]!
    controls: [Control!]!
    gameTypes: [GameType!]!
    gameType(id: String!): GameType
  }
`;
