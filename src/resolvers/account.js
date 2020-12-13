const accountResolver = {
  Query: {
    accounts: async (_source, _args, { dataSources }) =>
      dataSources.account.list(),
    account: async (_source, { id }, { dataSources }) =>
      dataSources.account.show(id)
  },
  Mutation: {
    update: async (_source, fields, { dataSources }) =>
      dataSources.account.update(fields)
  }
};

module.exports = accountResolver;
