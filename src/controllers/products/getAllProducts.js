const { Product } = require("../../models");

const getAllProducts = async (req, res, next) => {
  // const { id } = req.params;
  //   const { page = 1, limit = 10, favorite = null } = req.query;

  const products = await Product
    .find
    // {},
    // {
    // skip: (page - 1) * limit,
    // limit: +limit,
    // }
    ()
    .populate("owner", "_id, name");
  res.status(200).json(products);
};

module.exports = getAllProducts;
