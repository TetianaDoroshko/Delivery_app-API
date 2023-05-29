const express = require("express");
const { ctrlWrapper } = require("../middlewares");
const { addOrder, getOrders } = require("../controllers");

const router = express.Router();

router.post("/", ctrlWrapper(addOrder));

// route for getting list of orders (e.g. from postman)
router.get("/", ctrlWrapper(getOrders));

module.exports = router;
