const mongoose = require("mongoose");

const newProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 255,
      required: true,
    },
    image: {
      type: String,

      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    disc_price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt timestamps will be taken care of by this automatically
);

module.exports = mongoose.model("newProduct", newProductSchema, "Products");
