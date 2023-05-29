const { model, Schema, SchemaTypes } = require("mongoose");

const shopSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for the shop"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model("shop", shopSchema);

module.exports = Shop;
