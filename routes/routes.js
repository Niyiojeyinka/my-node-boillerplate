const express = require("express");
const router = express.Router();
const useCor = require("../middlewares/cors");

router.post("/create", useCor);
module.exports = router;
