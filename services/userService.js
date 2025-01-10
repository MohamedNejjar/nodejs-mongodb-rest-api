const User = require("../database/model/users");
const bcrypt = require("bcrypt");
const constant = require("../constants/index");
const jsw = require("jsonwebtoken");
module.exports.signUP = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constant.usersMessage.DUPLICATE_EMAIL);
    }
    password = await bcrypt.hash(password, 12);

    let newUser = new User({ email, password });

    return await newUser.save();
  } catch (error) {
    console.log("something went wrong :service : signup ", error);
    throw new Error(error);
  }
};
module.exports.UserLogin = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(constant.usersMessage.USER_NOT_FOUND);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error(constant.usersMessage.invalidUser);
    }
    const token = jsw.sign(
      { id: user._id },
      process.env.SECRET_KEY || "my_secret_token",
      { expiresIn: "1d" }
    );

    return token;
  } catch (error) {
    console.log("something went wrong :service : signup ", error);
    throw new Error(error);
  }
};
