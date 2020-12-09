const fs = require('fs');
const path = require('path');

const resolvers = fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .map(file => require(path.resolve(__dirname, file)));

module.exports = resolvers;
