const express = require("express");
const { ctrlWrapper } = require("../middlewares");
const { getAllProducts, addProduct } = require("../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(getAllProducts));

// add products - for adding new products to db (from postman)
router.post("/", ctrlWrapper(addProduct));

module.exports = router;
