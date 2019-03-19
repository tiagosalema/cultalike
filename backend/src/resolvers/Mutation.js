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
    const password = await bcrypt.hash(args.password, 10); // 10 is the length of the hash salt

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] } // it has to be set because it is coming from an enum
        }
      },
      info
    );
    const token = jwt.sign(
      { userId: user.id, whatsThis: "A sign up token" },
      process.env.APP_SECRET,
      {
        expiresIn: "365d"
      }
    ); // Creates the JWT
    ctx.response.cookie("token", token, {
      httpOnly: true
    });
    return user; //returns user to the browser
  },

  async signin(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } }, info);
    if (!user) throw new Error("No such user found");
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Password is wrong");
    const token = jwt.sign(
      { userId: user.id, whatsThis: "A sign in token" },
      process.env.APP_SECRET,
      {
        expiresIn: "365d"
      }
    );
    ctx.response.cookie("token", token, {
      httpOnly: true
    });
    return user;
  }
};

module.exports = Mutations;
