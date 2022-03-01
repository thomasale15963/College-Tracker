const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: [true, "Username already in use."],
  },
  fullName: [{ firstName: String, lastName: String }],
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
});

// add password hash hook
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Create a login method
userSchema.statics.login = async function (username, email = "", password) {
  var user;

  if (email) {
    user = await this.findOne({ email });
  } else {
    user = await this.findOne({ username });
  }

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return user;
    }

    throw Error("Incorrect email and/or password");
  }

  throw Error("Incorrect email and/or password");
};

module.exports = mongoose.model("User", userSchema);
