const dotenv = require("dotenv");

const mongoose = require("mongoose");
dotenv.config();
module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("database connected ");
  } catch (error) {
    console.log("failed connect to database  ", error);
    throw new Error(error);
  }
};
