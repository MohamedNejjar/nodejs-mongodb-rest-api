const User = require("../database/model/users");
const bcrypt = require("bcrypt");
const constant = require("../constants/index");
module.exports.signUP = async ({ email, password }) => {
  try {
    // const user = await User.findOne({ email });
    // if (user) {
    //   throw new Error(constant.usersMessage.DUPLICATE_EMAIL);
    // }
    password = await bcrypt.hash(password, 12);

    user = new User({ email, password });

    return await user.save();
  } catch (error) {
    console.log("something went wrong :service : signup ", error);
    throw new Error(error);
  }
};
