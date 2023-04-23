const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/aync");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Product = require("../models/Product");
const config = require("./../config/config.json");

exports.getproducts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const searchTerm = req.query.searchTerm;

  try {
    const searchCondition = searchTerm
      ? {
          $or: [
            { name: new RegExp(searchTerm, "i") },
            { description: new RegExp(searchTerm, "i") },
          ],
        }
      : {};
    const totalItems = await Product.countDocuments(searchCondition).exec();
    const products = await Product.find(searchCondition)
      .skip(skip)
      .limit(limit)
      .exec();

    res.status(200).json({
      success: true,
      count: totalItems,
      page: page,
      totalPages: Math.ceil(totalItems / limit),
      data: products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching products" });
  }
};

exports.getproduct = async (req, res, next) => {
  const config = await Product.findById(req.params.id);
  res.status(200).json({ success: true, count: config.length, data: config });
};

exports.addproducts = async (req, res, next) => {
  try {
    let data = req.body;

    const product = await Product.create(data);
    res.status(201).json({
      success: true,
      data: product,
      message: "Product Added Succesfully!",
    });
  } catch (err) {
    console.log(err);

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorResponse(message, 400);
      next(err);
    }
  }
};

exports.updateproducts = async (req, res, next) => {
  const newProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: newProduct,
    message: "Product Updated Succesfully!",
  });
};

exports.deleteproducts = async (req, res, next) => {
  const newProduct = await Product.deleteOne(
    { _id: req.params.id },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    data: newProduct,
    message: "Product Deleted Succesfully!",
  });
};

// Check User
exports.getuser = asyncHandler(async (req, res, next) => {
  User.find({})
    .exec()
    .then((user) => {
      console.log("Found users " + JSON.stringify(user));
    });
  User.find({ phonenumber: req.body.phonenumber })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          success: false,
          message: "User is not exist!",
        });
      }

      id = user[0]._id;

      if (req.body.password === user[0].password) {
        const token = jwt.sign(
          {
            phonenumber: user[0].phonenumber,
            userId: user[0]._id,
          },
          config.jwt.secret,
          {
            expiresIn: config.jwt.options.expiresIn,
          }
        );

        return res.status(200).json({
          success: true,
          message: "Auth Successful !",
          token: token,
          userId: user[0]._id,
        });
      }

      if (req.body.password != user[0].password) {
        return res.status(401).json({
          success: false,
          message: "Auth Unsuccessful !",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
