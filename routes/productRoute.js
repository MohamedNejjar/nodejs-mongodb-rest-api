const express = require("express");
const productControell = require("../controller/productController");
const router = express.Router();
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../apiSchema/productSchema");
router.post(
  "/product",
  joiSchemaValidation.validBody(productSchema.createProductSchema),
  productControell.createProduct
);
router.get(
  "/product",
  joiSchemaValidation.validQueryParams(productSchema.getAllProductSchema),
  productControell.getAllProduct
);
module.exports = router;
