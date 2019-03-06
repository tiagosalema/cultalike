const { forwardTo } = require("prisma-binding");

const Mutations = {
  createUser: forwardTo("db"),
  createMovie: forwardTo("db"),
  createRatedMovie: forwardTo("db"),
  deleteUser: forwardTo("db"),
  deleteMovie: forwardTo("db"),
  deleteRatedMovie: forwardTo("db")
};

module.exports = Mutations;
