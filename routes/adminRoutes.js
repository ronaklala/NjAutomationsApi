const express = require("express");
const {
  addNewProduct,
  getProduct,
  getSingleProduct,
  getCustomers,
  getUsers,
  getOrders,
  getSingleOrder,
  updateSingleOrder,
  updateSingleProduct,
  deleteSingleProduct,
  getDashboard,
} = require("../controllers/AdminFunctions");

const router = express.Router();

router.post("/addNewProduct", addNewProduct);
router.get("/getProducts", getProduct);
router.get("/singleProduct/:id", getSingleProduct);
router.get("/getCustomers", getCustomers);
router.get("/getUsers", getUsers);
router.get("/getOrders", getOrders);
router.get("/getSingleOrder/:id", getSingleOrder);
router.get("/updateOrderStatus/:id/:status", updateSingleOrder);
router.post("/updateProduct/:id", updateSingleProduct);
router.get("/deleteProduct/:id", deleteSingleProduct);
router.get("/getDashboard", getDashboard);

module.exports = router;
