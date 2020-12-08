const { gql } = require("apollo-server-express");

const mutation = gql`
  type Mutation {
    createFruit(fruit: FruitInput): Fruit
    updateFruit(id: ID, fruit: FruitInput): Fruit
    deleteFruit(id: ID): Fruit
  }

  input FruitInput {
    name: String
  }
`;

module.exports = mutation;