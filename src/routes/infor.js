const express = require("express");
const router = express.Router();

const inforController = require("../app/controllers/InforController");

router.get("/something", inforController.something);
router.get("/", inforController.handler);

module.exports = router;
