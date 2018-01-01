const Hapi = require('hapi');
const { createLogger, transports } = require('winston');
const { graphqlHapi } = require('apollo-server-hapi');
const { makeExecutableSchema } = require('graphql-tools');
const note = require('./lib/note');
const resolvers = require('./lib/resolvers');

const logger = createLogger({
  level: 'info',
  transports: [new transports.Console()],
});

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: { log: { collect: true } },
});

const schema = makeExecutableSchema({ typeDefs: [note], resolvers });

async function StartServer() {
  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema,
      },
      route: {
        cors: true,
      },
    },
  });

  try {
    await server.start();
  } catch (err) {
    console.log(`Error while starting server: ${err.message}`);
  }
  console.log(`Server running at: ${server.info.uri}`);

  server.events.on('response', res => logger.info(res.payload));
}

StartServer();
