const { model, Schema, SchemaTypes } = require("mongoose");

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for the product"],
    },
    price: {
      type: Number,
      min: 0.01,
      required: [true, "Set price for the product"],
    },
    img: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "shop",
      required: [true, "Set owner of the product"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = Product;
