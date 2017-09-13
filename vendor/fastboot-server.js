var FastBootAppServer = require('fastboot-app-server');

var server = new FastBootAppServer({
  distPath: '.',
  gzip: true
});

server.start();