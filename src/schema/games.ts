import { gql } from "apollo-server";

export default gql`
  type Game {
    id: String!
    short_name: String!
    name: String!
    description: String!
    type_id: String!
    source: String
    file: String
    width: Int
    height: Int
    version: String
    visible: Boolean
    controller: Int
  }

  type Query {
    getGames: [Game]!
    getGame(id: Int!): Game
  }
`;
