const { Order } = require("../../models");

const getOrders = async (req, res) => {
  let { dateStart = new Date(), dateEnd = new Date() } = req.query;

  dateStart = dateStart ? new Date(dateStart) : new Date();
  dateEnd = dateEnd ? new Date(dateEnd) : new Date();

  const orders = await Order.find({
    createdAt: {
      $gte: dateStart,
      $lte: dateEnd.setDate(dateEnd.getDate() + 1),
    },
  }).populate("customer", "name phone email address");

  res.status(200).json(orders);
};

module.exports = getOrders;
