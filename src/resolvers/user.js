const userResolver = {
  Query: {
    users: async (_source, _args, { dataSources }) =>
      dataSources.user.getUsers()
  }
};

module.exports = userResolver;
