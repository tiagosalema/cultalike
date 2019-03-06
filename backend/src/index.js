require("dotenv").config();
const createServer = require("./createServer");
const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets =>
    console.log(`Server is running on http://localhost:${deets.port}, my guy`)
);
