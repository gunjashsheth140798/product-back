const express = require("express");
const {
  getproducts,
  addproducts,
  updateproducts,
  getproduct,
  deleteproducts,
} = require("../controllers/controller");
const check = require("../middleware/check");

const router = express.Router();

router.route("/").get(getproducts);
router.route("/:id").get(getproduct);
router.post("/", check, addproducts);
router.put("/:id", check, updateproducts);
router.delete("/:id", check, deleteproducts);

module.exports = router;
