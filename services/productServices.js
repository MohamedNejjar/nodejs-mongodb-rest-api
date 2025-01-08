const mongoose = require("mongoose");
const product = require("../database/model/productModel");
const constants = require("../constants");
module.exports.createProduct = async (servicesData) => {
  try {
    let productData = new product({ ...servicesData });
    return await productData.save();
  } catch (error) {
    throw new Error(error);
  }
};
/////////////////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////////////
module.exports.fetchProductByID = async ({ id }) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(constants.DataBaseMessage.InvalidID);
    }
    console.log(id);

    let productT = await product.findById(id);
    if (!productT) {
      throw new Error(constants.productMessage.NOT_FOUND);
    }

    return productT;
  } catch (error) {
    console.log("something went wrong :service :getProductById", error);
    throw new Error(error);
  }
};
///////////////////////////////////////////////////////////////////////////////////
module.exports.updateProductByID = async ({ id, updateBody }) => {
  console.log(id, updateBody);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(constants.DataBaseMessage.InvalidID);
    }

    let productT = await product.findOneAndUpdate(
      { _id: id },
      { $set: updateBody },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!productT) {
      throw new Error(constants.productMessage.NOT_UPDATED);
    }

    return productT;
  } catch (error) {
    console.log("something went wrong :service :UpdateProductById", error);
    throw new Error(error);
  }
};
///////////////////////////////////////////////////////////////////////////
module.exports.deleteProduct = async ({ id }) => {
  console.log(id);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(constants.DataBaseMessage.InvalidID);
    }

    let productT = await product.findByIdAndDelete(id);
    if (!productT) {
      throw new Error(constants.productMessage.NOT_DELETE);
    }

    return productT;
  } catch (error) {
    console.log("something went wrong :service :DeleteProductByID ", error);
    throw new Error(error);
  }
};
