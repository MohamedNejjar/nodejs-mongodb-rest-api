const constant = require("../constants/index");
const jwt = require('jsonwebtoken')
module.exports.validateToken = (req, res, next) => {
  let response = { ...constant.defaultServerResponse };
  try {
    if (!req.headers.authorization) {
      throw new Error(constant.requestValidationMessage.TOKEN_MESSING);
    }
    console.log(req.headers.authorization.trim());
    const token = req.headers.authorization.trim()
    const decoded = jwt.verify(token,process.env.SECRET_KEY ||'my_secret_token')
    console.log(decoded)
    return next()
  } catch (error) {
    console.log("error", error);
    response.message= error.message 
     response.status = 401
  }
  return res.status(response.status).send(response.body)
};
