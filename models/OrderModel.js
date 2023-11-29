const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 255,
      required: true,
    },
    address: {
      type: String,

      required: true,
    },
    phno: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    pid: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    razorpay_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt timestamps will be taken care of by this automatically
);

const OrderModel = mongoose.model("Order", OrderSchema, "Orders");

module.exports = OrderModel;
