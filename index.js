const Server = require('./config/server');
const hostname = 'localhost';
const port = 3000;

const customServer = new Server(hostname, port);
customServer.create();
customServer.initServer();