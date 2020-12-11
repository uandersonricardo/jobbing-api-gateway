const { gql } = require('apollo-server-express');

const mutation = gql`
  type Mutation {
    login(email: String!, password: String!): String
    register(
      name: String!
      email: String!
      password: String!
      birthday: String!
      educationLevel: String!
    ): String
    createFruit(fruit: FruitInput): Fruit
    updateFruit(id: ID, fruit: FruitInput): Fruit
    deleteFruit(id: ID): Fruit
  }

  input FruitInput {
    name: String
  }
`;

module.exports = mutation;
