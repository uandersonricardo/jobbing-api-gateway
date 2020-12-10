const { gql } = require('apollo-server-express');

const types = gql`
  type Fruit {
    id: ID!
    name: String
  }

  type User {
    id: ID!
    name: String
  }
`;

module.exports = types;
