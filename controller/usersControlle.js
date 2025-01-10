const constants = require("../constants/index");
const userService = require("../services/userService");
module.exports.createUser = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFormService = await userService.signUP(req.body);
    (response.status = 200),
      (response.message = constants.usersMessage.createUser);
    console.log(constants.usersMessage.createUser);
    response.body = responseFormService;
  } catch (error) {
    (response.status = 400),
      (response.message = error.message),
      (response.body = {});
    console.log(error.message);
  }
  return res.status(response.status).send(response.body);
};
module.exports.UserLogin = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFormService = await userService.UserLogin(req.body);
    (response.status = 200),
      (response.message = constants.usersMessage.LoginUser);
    console.log(constants.usersMessage.LoginUser);
    response.body = responseFormService;
  } catch (error) {
    (response.status = 400),
      (response.message = error.message),
      (response.body = {});
    console.log(error.message);
  }
  return res.status(response.status).send(response.body);
};
