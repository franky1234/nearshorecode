const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const globalRoutes = require('../components/global.routes');
const app = express();

class Server {
  constructor(hostname, port) {
    this.hostname = hostname;
    this.port = port;
    this.server = null;
  }
  create() {
    app.use(bodyParser.urlencoded(
      {
        extended: false
      }
    ));
    app.use(bodyParser.json());
    this.server = http.createServer(app);
  }

  initServer() {
    this.server.listen(this.port, this.hostname, () => {
      console.log(`Server runing.. at http://${this.hostname}:${this.port}`);
      globalRoutes(app);
    })
  }
}

module.exports = Server;