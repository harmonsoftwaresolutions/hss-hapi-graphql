const Hapi = require('hapi');

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

server.start();
console.log(`Server running at: ${server.info.uri}`);
