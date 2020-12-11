const authResolver = {
  Mutation: {
    login: async (_source, fields, { dataSources }) =>
      dataSources.auth.login(fields),
    register: async (_source, fields, { dataSources }) =>
      dataSources.auth.register(fields)
  }
};

module.exports = authResolver;
