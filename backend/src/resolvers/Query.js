const { forwardTo } = require("prisma-binding");

const Query = {
  user: forwardTo("db"),
  users: forwardTo("db"),
  movies: forwardTo("db"),
  movie: forwardTo("db")
};

module.exports = Query;
