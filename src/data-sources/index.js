const fs = require('fs');
const path = require('path');

const dataSources = () => {
  const sources = {};

  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => {
      const sourceName = file.slice(0, file.indexOf('.'));
      const sourcePath = path.resolve(__dirname, file);
      const SourceClass = require(sourcePath);

      sources[sourceName] = new SourceClass();
    });

  return sources;
};

module.exports = dataSources;
