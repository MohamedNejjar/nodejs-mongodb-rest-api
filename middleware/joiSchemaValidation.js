const constants = require("../constants/index");

const validObjectSchema = (data, schema) => {
  const result = schema.validate(data);
  const constants = require("../constants/index");
  if (result.error) {
    const resultDetails = result.error.details.map((value) => {
      return {
        path: value.path,
        error: value.message,
      };
    });
    return resultDetails;
  }
  return null;
};
module.exports.validBody = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      (response.status = 400),
        (response.massage = constants.requestValidationMessage.Bad_Request);
      return res.status(response.status).send(response);
    }
    return next();
  };
};
module.exports.validQueryParams = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validObjectSchema(req.query, schema);
    console.log(req.query);
    if (error) {
      response.body = error;
      (response.status = 400),
        (response.massage = constants.requestValidationMessage.Bad_Request);
      return res.status(response.status).send(response);
    }
    return next();
  };
};
