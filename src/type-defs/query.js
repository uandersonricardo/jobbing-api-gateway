const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    validate: Account
    accounts: [Account]
    account(id: ID!): Account
  }
`;

module.exports = query;
