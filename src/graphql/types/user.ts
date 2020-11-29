import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    username: String!
  }
  extend type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }
  extend type Mutation {
    addUser(username: String!): User
    deleteUser(id: ID!): User
    updateUser(username: String!, id: ID!): User
  }
`;