const { forwardTo } = require("prisma-binding");

const Query = {
  user: forwardTo("db"),
  users: forwardTo("db"),
  ratedMovies: forwardTo("db"),
  ratedMovie: forwardTo("db")
};

module.exports = Query;
