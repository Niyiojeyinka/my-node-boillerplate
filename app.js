const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");
const path = require("path");
const db = require("./models");

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", routes);
module.exports = app;
