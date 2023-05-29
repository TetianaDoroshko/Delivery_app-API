const { model, Schema, SchemaTypes } = require("mongoose");

const orderSchema = Schema(
  {
    customer: {
      type: SchemaTypes.ObjectId,
      ref: "customer",
      required: [true, "Set customer of the order"],
    },
    orderList: {
      type: [
        {
          _id: {
            type: SchemaTypes.ObjectId,
            ref: "product",
            required: [true, "Set product's id to the order list"],
          },
          productName: {
            type: String,
            required: [true, "Set product's name to the order list"],
          },
          quantity: {
            type: Number,
            min: 1,
            required: [true, "Set quantity of products to the order list"],
          },
        },
      ],
    },
    total: {
      type: Number,
      min: 0.01,
      required: [true, "Set total cost of order"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
