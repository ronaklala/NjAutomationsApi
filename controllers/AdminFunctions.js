const ProductModel = require("../models/ProductModel");
const UserModel = require("../models/UserModel");
const { default: mongoose } = require("mongoose");
const OrderModel = require("../models/OrderModel");
const {
  sendOrderUpdateEmail,
  sendOrderUpdateEmailWithTracking,
} = require("./MailController");
const { Buffer } = require("buffer");

exports.addNewProduct = (req, res) => {
  const product = new ProductModel(req.body);

  product
    .save()
    .then((doc) => {
      res.status(200).json({ success: "Product Added" });
    })
    .catch((err) => {
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

exports.getOrders = (req, res) => {
  OrderModel.aggregate([
    {
      $lookup: {
        from: "Products",
        let: { pid: { $toObjectId: "$pid" } },
        pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$pid"] } } }],
        as: "productDetails",
      },
    },
  ]).then((doc) => {
    res.status(200).json(doc);
  });
};

exports.getSingleOrder = (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const orders = OrderModel.aggregate([
    {
      $match: {
        _id: id,
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

    {
      $lookup: {
        from: "Users",
        let: { uid: { $toObjectId: "$uid" } },
        pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$uid"] } } }],
        as: "userDetails",
      },
    },
  ]).then((doc) => {
    res.status(200).json(doc);
  });
};

exports.updateSingleOrder = async (req, res) => {
  OrderModel.findByIdAndUpdate(req.params.id, {
    status: req.params.status,
  })
    .then((doc) => {
      ProductModel.findById(doc.pid).then((data) => {
        UserModel.findById(doc.uid).then(async (user) => {
          await sendOrderUpdateEmail(
            user.email,
            doc.name,
            data.image,
            doc.qty,
            data.price,
            doc.city,
            doc.state,
            doc.address,
            data.name,
            doc._id,
            req.params.status
          );

          await res.status(200).json({ message: "Updated" });
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
};

exports.updateSingleProduct = (req, res) => {
  const product = req.body;

  ProductModel.findByIdAndUpdate(req.params.id, product)
    .then((doc) => {
      res.status(200).json({ message: "Product Updated" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error" });
    });
};

exports.deleteSingleProduct = (req, res) => {
  const productId = req.params.id;

  ProductModel.findOneAndDelete({ _id: productId })
    .then(() => {
      res.status(200).json({ message: "Product Deleted" });
    })
    .catch(() => {
      res.status(404).json({ message: "Internal Server Error" });
    });
};

exports.getDashboard = (req, res) => {
  let dashboard = {
    orders: null,
    products: null,
    users: null,
    totalStock: null,
  };

  const getAllValues = () => {
    OrderModel.countDocuments().then((count) => {
      dashboard.orders = count;
      ProductModel.countDocuments().then((count) => {
        dashboard.products = count;
        UserModel.countDocuments().then((count) => {
          dashboard.users = count;
          ProductModel.aggregate([
            {
              $group: {
                _id: "",
                totalStock: { $sum: "$qty" },
              },
            },
          ]).then((count) => {
            dashboard.totalStock = count;
            res.status(200).json(dashboard);
          });
        });
      });
    });
  };

  getAllValues();
};

exports.updateSingleOrderWithTracking = async (req, res) => {
  console.log(req.body);

  OrderModel.findByIdAndUpdate(req.params.id, {
    status: req.params.status,
    tracking_id: req.params.tid,
  })
    .then((doc) => {
      ProductModel.findById(doc.pid).then((data) => {
        UserModel.findById(doc.uid).then(async (user) => {
          await sendOrderUpdateEmailWithTracking(
            user.email,
            doc.name,
            data.image,
            doc.qty,
            data.price,
            doc.city,
            doc.state,
            doc.address,
            data.name,
            doc._id,
            req.params.status,
            req.body
          );

          await res.status(200).json({ message: "Updated" });
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
};
