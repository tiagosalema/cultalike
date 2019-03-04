require("dotenv").config();
const createServer = require("./createServer");

const server = createServer();
const cors = { credentials: true, origin: process.env.FRONTEND_URL };

server.start({ cors }, deets =>
  console.log(`Server is running on http://localhost:${deets.port}`)
);
