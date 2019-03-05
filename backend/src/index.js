require("dotenv").config();
const createServer = require("./createServer");
const server = createServer();

// const errorHandler = (err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err);
//   }
//   const { status } = err;
//   res.status(status).json(err);
// };

// server.express.use(errorHandler);

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
