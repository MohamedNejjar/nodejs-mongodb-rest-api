const productService = require("../services/productServices");
const constants = require("../constants/index");

module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFormService = await productService.createProduct(req.body);
    (response.status = 200),
      (response.message = constants.productMessage.ProductCreated);
    response.body = responseFormService;
  } catch (error) {
    (response.status = 400),
      (response.message = error.message),
      (response.body = {});
  }
  return res.status(response.status).send(response.body);
};
module.exports.getAllProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFormService = await productService.fetchProduct(req.query);
    (response.status = 200),
      (response.message = constants.productMessage.ProductFetch);
    response.body = responseFormService;
  } catch (error) {
    (response.status = 400),
      (response.message = error.message),
      (response.body = {});
  }
  return res.status(response.status).send(response.body);
};
