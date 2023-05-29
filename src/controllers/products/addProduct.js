const { Product } = require("../../models");

const addProduct = async (req, res, next) => {
  const newProduct = req.body;

  const product = await Product.create(newProduct);

  res.status(201).json(product);
};

module.exports = addProduct;
