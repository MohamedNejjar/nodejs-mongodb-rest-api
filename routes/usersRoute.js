const express = require("express");
const userController = require("../controller/usersControlle");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const userSchema = require("../apiSchema/userSchema");
const route = express.Router();
route.post(
  "/signup",
  joiSchemaValidation.validBody(userSchema.userSchema),
  userController.createUser
);

route.post(
  "/login",
  joiSchemaValidation.validBody(userSchema.loginSchema),
  userController.UserLogin
);
module.exports = route;
