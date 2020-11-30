const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const exampleRoutes = require("./routes/exampleRoute");
const userRoutes = require("./routes/userRoute");
const path = require("path");
const dbURL = "mongodb://localhost:27017/{dbname}";
const database = require("./helpers/database");

database.connect(dbURL);
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/example", exampleRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
