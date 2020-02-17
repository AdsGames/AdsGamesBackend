import { gql } from "apollo-server";

export default gql`
  type Game {
    id: ID!
    shortName: String!
    name: String!
    description: String!
    typeId: ID!
    source: String
    file: String
    width: Int
    height: Int
    version: String
    visible: Boolean
    controller: Int
    type: GameType!
    controls: [Control!]!
  }

  type Query {
    games: [Game!]!
    game(id: String!): Game
  }
`;
