const resolvers = {
  Query: {
    notes: () => {
      const response = [{ id: 1 }, { id: 2 }, { id: 3 }];
      return response;
    },
  },
};

module.exports = resolvers;
