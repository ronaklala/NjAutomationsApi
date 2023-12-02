const express = require("express");
const {
  registerNewUser,
  loginUser,
  paymentControl,
  getOrders,
} = require("../controllers/ClientFunctions");
const { sendTestMail } = require("../controllers/MailController");
const router = express.Router();

router.post("/register_uesr", registerNewUser);
router.post("/login_user", loginUser);
router.post("/checkout", paymentControl);
router.get("/orders/:uid", getOrders);

module.exports = router;
