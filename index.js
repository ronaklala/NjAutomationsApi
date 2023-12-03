const express = require("express");
const app = express();
const PORT = 5999;
const cors = require("cors");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const usesrRoutes = require("./routes/UserRoutes");
const functions = require("firebase-functions");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
const { default: mongoose } = require("mongoose");

dotenv.config();

mongoose.set("strictQuery", false);
const DB =
  "mongodb+srv://Warrior:Ronak3103@mydb.tgsvt.mongodb.net/NjAutomations?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to NJ Automations DB successfully");
  })
  .catch((err) => console.log(err));

app.use("/api/admin", adminRoutes);
app.use("/api/user", usesrRoutes);

app.listen(PORT, (e) => {});

exports.api = functions.https.onRequest(app);
