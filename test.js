const dgram = require('dgram');
const server = dgram.createSocket('udp4');//would UDP work? Nope could not get it to work properly

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening on: ${address.address}:${address.port}`);
});

server.bind(3000);
// Prints: server listening 0.0.0.0:3000
server.me;