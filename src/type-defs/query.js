const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    fruits: [Fruit]
    fruit(id: ID!): Fruit
    users: [User]
  }
`;

module.exports = query;
