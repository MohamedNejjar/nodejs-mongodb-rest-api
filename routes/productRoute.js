const express = require("express");
const productControell = require("../controller/productController");
const router = express.Router();
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../apiSchema/productSchema");
const validationToken = require('../middleware/tokenValidation')
router.post(
  "/",
  joiSchemaValidation.validBody(productSchema.createProductSchema),
  productControell.createProduct
);

router.get(
  "/",validationToken.validateToken,
  joiSchemaValidation.validQueryParams(productSchema.getAllProductSchema),
  productControell.getAllProduct
);
router.get("/:id", productControell.getProductByID); 
router.put(
  "/:id",
  joiSchemaValidation.validBody(productSchema.updateProductSchema),
  productControell.updateProduct
);   
 router.delete('/:id',productControell.deleteProduct) 

  
 
 
module.exports = router;
