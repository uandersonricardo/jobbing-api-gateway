const Fruits = [
  { id: '1', name: 'orange' },
  { id: '2', name: 'strawberry' },
  { id: '3', name: 'coconut' }
];

const fruitResolver = {
  Query: {
    fruits() {
      return Fruits;
    },
    fruit(_, { id }) {
      return Fruits.find(item => item.id === id);
    }
  },
  Mutation: {
    createFruit(_, { fruit }) {
      return { ...fruit, id: (Fruits.length + 1).toString() };
    },
    updateFruit(_, { id, fruit }) {
      return { id, ...fruit };
    },
    deleteFruit(_, { id }) {
      return Fruits.find(item => item.id === id);
    }
  }
};

module.exports = fruitResolver;
