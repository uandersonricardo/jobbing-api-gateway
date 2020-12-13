const authResolver = {
  Query: {
    validate: async (_source, _args, { dataSources }) =>
      dataSources.auth.validate()
  },
  Mutation: {
    login: async (_source, fields, { dataSources }) =>
      dataSources.auth.login(fields),
    register: async (_source, fields, { dataSources }) =>
      dataSources.auth.register(fields),
    forgotPassword: async (_source, fields, { dataSources }) =>
      dataSources.auth.forgotPassword(fields),
    resetPassword: async (_source, fields, { dataSources }) =>
      dataSources.auth.resetPassword(fields)
  }
};

module.exports = authResolver;
