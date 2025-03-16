const net = require('net');
const fs = require('fs');

function findAvailablePort(startPort, callback) {
  const server = net.createServer();
  
  server.on('error', () => {
    findAvailablePort(startPort + 1, callback);
  });
  
  server.listen(startPort, () => {
    server.close(() => {
      callback(startPort);
    });
  });
}

findAvailablePort(3001, (port) => {
  // Write port to file without any prefix
  fs.writeFileSync('.env.port', port.toString());
  console.log(`Found available port: ${port}`);
  process.exit(0);
});
