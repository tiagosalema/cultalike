const { forwardTo } = require("prisma-binding");

const Query = {
  user: forwardTo("db"),
  users: forwardTo("db"),
  ratedMovies: forwardTo("db"),
  ratedMovie: forwardTo("db"),

  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
  }
};

module.exports = Query;
