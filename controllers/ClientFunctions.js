const express = require("express");
const UserModel = require("../models/UserModel");
const Razorpay = require("razorpay");
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");
const mognoose = require("mongoose");

exports.registerNewUser = (req, res) => {
  const user = new UserModel(req.body);

  user
    .save()
    .then((doc) => {
      res.status(200).json({ message: "Registered Successfully" });
    })
    .catch((err) => {
      res.status(403).json({ message: "Internal Server Error" });
    });
};

exports.loginUser = (req, res) => {
  const user = UserModel.find({ email: req.body.email })
    .then((doc) => {
      if (doc == "") {
        res.status(404).json({ message: "No User Found" });
      } else if (doc[0].password === req.body.pass) {
        res.status(200).json(doc[0]);
      } else {
        res.status(500).json({ message: "Invalid Password" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "No User Found" });
    });
};

const instance = new Razorpay({
  key_id: "rzp_test_ErzbiMbmfK5N8T",
  key_secret: "DNsOvqTQ1HELHZguNv1VLKpQ",
});

exports.paymentControl = (req, res) => {
  const order = new OrderModel(req.body);

  ProductModel.findByIdAndUpdate(req.body.pid, {
    $inc: { qty: -req.body.qty },
  }).then((docs) => {
    order.save().then((doc) => {
      res.status(200).json({ message: "Order Placed" });
    });
  });
};

exports.getOrders = (req, res) => {
  const orders = OrderModel.aggregate([
    {
      $match: {
        uid: req.params.uid, // Match orders for a specific user
      },
    },
    {
      $lookup: {
        from: "Products",
        let: { pid: { $toObjectId: "$pid" } },
        pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$pid"] } } }],
        as: "productDetails",
      },
    },
  ])
    .sort({ createdAt: -1 })
    .then((doc) => {
      res.status(200).json(doc);
    });
};
