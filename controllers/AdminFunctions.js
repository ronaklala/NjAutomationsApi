const express = require("express");
const ProductModel = require("../models/ProductModel");
const OrderModel = require("../models/OrderModel");
const UserModel = require("../models/UserModel");

exports.addNewProduct = (req, res) => {
  const product = new ProductModel(req.body);

  product
    .save()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: "Product Added" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: "Internal Server Error" });
    });
};

exports.getProduct = (req, res) => {
  const products = ProductModel.find({}).then((doc) => {
    res.json(doc);
  });
};

exports.getSingleProduct = (req, res) => {
  const info = {
    product: {},
    relatedProducts: [],
  };

  const products = ProductModel.findById(req.params.id).then((doc) => {
    if (doc) {
      info.product = doc;
      ProductModel.find({ _id: { $ne: req.params.id } })
        .limit(3)
        .then((doc) => {
          info.relatedProducts = doc;
          res.status(200).json(info);
        });
    } else {
      res.status(404).json({ mesage: "No Data Found" });
    }
  });
};

exports.getCustomers = (req, res) => {
  const orders = OrderModel.aggregate([
    {
      $unwind: "$uid",
    },
    {
      $lookup: {
        from: "Users",
        let: { uid: { $toObjectId: "$uid" } },
        pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$uid"] } } }],
        as: "userDetails",
      },
    },
    {
      $group: {
        _id: { $toLower: "$uid" },
        count: { $sum: 1 },
        userDetails: { $first: { $arrayElemAt: ["$userDetails", 0] } },
      },
    },

    {
      $match: {
        count: { $gte: 0 },
      },
    },
  ]).then((doc) => {
    res.status(200).json(doc);
  });
};

exports.getUsers = (req, res) => {
  UserModel.find().then((doc) => {
    res.status(200).json(doc);
  });
};
