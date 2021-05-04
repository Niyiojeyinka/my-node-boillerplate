const express = require("express");
const app = express();
const blogRoutes = require("./routes/blogRoute");
const path = require("path");
const cors = require("cors");
require("dotenv").config(); //process.env.DB_HOST

app.use(cors());
app.use(express.json());
app.use("/api", blogRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;
