import { gql } from "apollo-server";

export default gql`
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

  type Query {
    games: [Game!]!
    game(id: String!): Game
    featuredGames: [FeaturedGame!]!
    controls: [Control!]!
  }
`;
