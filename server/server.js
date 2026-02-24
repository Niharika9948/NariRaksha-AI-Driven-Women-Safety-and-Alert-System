const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/alerts", require("./routes/alertRoutes"));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});