import { createServer } from 'http';
import { app } from './backend/app.js';
import debug from 'debug';

// const app = require('./backend/app');
// const http = require('http');
// const debug = require('debug')('node-angular');
// const port = process.env.PORT || 3000

// app.set('port', port);
// const server = http.createServer(app);

// server.listen(port)

// console.log('Server running at ', port)

// const server = http.createServer((req, res) => {
//   res.end('This is my first response');
// });

// server.listen(process.env.Port || 3000);

const normalizePort = val => {
  const port = parseInt(val, 10);

  if(isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
