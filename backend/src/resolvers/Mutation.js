const { forwardTo } = require("prisma-binding");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Mutations = {
  createUser: forwardTo("db"),
  createMovie: forwardTo("db"),
  createRatedMovie: forwardTo("db"),
  deleteUser: forwardTo("db"),
  deleteMovie: forwardTo("db"),
  deleteRatedMovie: forwardTo("db"),

  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET); // Creates the JWT
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // miliseconds = 1 year
    });
    return user; //returns user to the browser
  }
};

module.exports = Mutations;
