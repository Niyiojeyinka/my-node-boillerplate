const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const checkTag = require("../middlewares/checkTag");
const checkSort = require("../middlewares/checkSort");
const checkDirection = require("../middlewares/checkDirection");

router.get("/ping", blogController.ping);
router.get("/posts", checkTag, checkSort, checkDirection, blogController.posts);

module.exports = router;
