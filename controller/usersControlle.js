const constants = require("../constants/index");
const productService = require("../services/userService");
module.exports.createUser = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFormService = await productService.signUP(req.body);
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
