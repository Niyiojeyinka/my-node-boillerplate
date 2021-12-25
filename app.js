const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const exampleRoutes = require("./routes/example.route");
const userRoutes = require("./routes/user.route");
const path = require("path");
const dbURL = "mongodb://localhost:27017/{dbname}";
const database = require("./helpers/database");
const cors = require("cors");
require("dotenv").config(); //process.env.DB_HOST

database.connect(dbURL);
app.use(cors());
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/example", exampleRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
