import { gql } from "apollo-server";

export default gql`
  type GameType {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    gameTypes: [GameType!]!
    gameType(id: String!): GameType
  }
`;
