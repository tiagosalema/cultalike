require("dotenv").config();
const createServer = require("./createServer");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const server = createServer();

server.express.use(cookieParser()); // send cookies along with the request (cookies have JWT)

// confirm the user is logged in in each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

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
