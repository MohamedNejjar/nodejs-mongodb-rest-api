const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  
  },
  { timestamps: true }
);
usersSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret.__v, delete ret._id;
    return ret;
  },
});
module.exports = mongoose.model("users", usersSchema);
