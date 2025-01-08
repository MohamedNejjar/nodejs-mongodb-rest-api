const Joi = require("@hapi/joi");
module.exports.userSchema = Joi.object().keys({
  email: Joi.string(),
  password: Joi.string(),
});
module.exports.loginSchema = Joi.object().keys({
  email: Joi.string(),
  password: Joi.string(),
});
