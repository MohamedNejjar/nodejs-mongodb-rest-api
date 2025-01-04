const product = require("../database/model/productModel");
module.exports.createProduct = async (servicesData) => {
  try {
    let productData = new product({ ...servicesData });
    return await productData.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.fetchProduct = async ({ skip = 0, limit = 10 }) => {
  try {
    console.log(parseInt(skip));
    let products = await product
      .find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    return products;
  } catch (error) {
    throw new Error(error);
  }
};
