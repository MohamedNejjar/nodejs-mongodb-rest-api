const mongoose = require("mongoose");
const productModel = new mongoose.Schema(
  {
    name: String,
    price: Number,
    brand: String,
  },
  {
    timestamps: true,
  }
);
productModel.set("toJSON", {
  transform: (doc, ret) => {
     ret.id =ret._id
    delete ret.__v, delete ret._id;
    return ret;
  },
});
module.exports = mongoose.model("product", productModel);
