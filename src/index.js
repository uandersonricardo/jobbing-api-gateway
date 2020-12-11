require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const app = express();

app.use(cors());
app.use(morgan('dev'));

const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');
const dataSources = require('./data-sources');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    return { token };
  }
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
