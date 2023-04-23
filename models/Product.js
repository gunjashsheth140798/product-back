const mongoose = require("mongoose");

ObjectId = mongoose.Schema.ObjectId;
const Product = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Title"],
    trim: true,
    maxlength: [50, "Product Title Can Not Be More Than 50 Characters"],
  },
  description: {
    type: String,
    required: [true, "Please Enter a Product Description"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter a Product Price"],
    trim: true,
    maxlength: [10, "Product Price Can Not Be More Than 10 Characters"],
  },
});

module.exports = mongoose.model("Product", Product, "productData");
