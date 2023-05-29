const { model, Schema, SchemaTypes } = require("mongoose");

const customerSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name of customer for the order"],
    },
    phone: {
      type: String,
      unique: true,
      index: true,
      required: [true, "Set phone of customer for the order"],
    },
    email: {
      type: String,
      required: [true, "Set email of customer for the order"],
    },
    address: {
      type: String,
      required: [true, "Set address of customer for the order"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Customer = model("customer", customerSchema);

module.exports = Customer;
