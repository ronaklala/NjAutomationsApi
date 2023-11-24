const express = require("express");
const {
  addNewProduct,
  getProduct,
  getSingleProduct,
  getCustomers,
  getUsers,
} = require("../controllers/AdminFunctions");

const router = express.Router();

router.post("/addNewProduct", addNewProduct);
router.get("/getProducts", getProduct);
router.get("/singleProduct/:id", getSingleProduct);
router.get("/getCustomers", getCustomers);
router.get("/getUsers", getUsers);

module.exports = router;
