var express = require("express");
const { getuser } = require("../controllers/controller");
var router = express.Router();

router.route("/").post(getuser);

module.exports = router;
