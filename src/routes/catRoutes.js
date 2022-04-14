const express = require("express");
const router = express.Router();
const catController = require("../controllers/catController");

// merge two cats images
router.get("/", catController.mergeCats);

module.exports = router;
