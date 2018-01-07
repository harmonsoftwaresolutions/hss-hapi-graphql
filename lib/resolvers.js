const fetch = require('node-fetch');

const resolvers = {
  Query: {
    async notes() {
      const res = await fetch('http://localhost:8081/notes');

      return res.json();
    },
  },
};

module.exports = resolvers;
