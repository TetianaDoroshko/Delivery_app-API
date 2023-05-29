const { Customer, Order } = require("../../models");

const addOrder = async (req, res) => {
  const { name, phone, email, address, orderList, total } = req.body;

  let customer = await Customer.findOneAndUpdate(
    { phone },
    { name, email, phone, address }
  );

  if (!customer) {
    customer = await Customer.create({ name, email, phone, address });
  }

  const order = await Order.create({
    customer: customer._id,
    orderList,
    total,
  });

  res.status(201).json(order);
};

module.exports = addOrder;
