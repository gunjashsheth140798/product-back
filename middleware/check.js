const jwt = require("jsonwebtoken");
// const config = require("./../config/config.json");

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Failed",
    });
  }
};
