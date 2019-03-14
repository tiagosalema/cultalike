require("dotenv").config();
const createServer = require("./createServer");
const cookieParser = require("cookie-parser");

const server = createServer();

server.express.use(cookieParser()); // send cookies along with the request (cookies have JWT)

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
