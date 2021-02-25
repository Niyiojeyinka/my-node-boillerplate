const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/exampleController");
const auth = require("../middlewares/auth");

router.get("/", auth, exampleController.viewExample);

module.exports = router;
