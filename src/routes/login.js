const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/LoginController");

router.post("/", loginController.handler);
router.get("/", loginController.index);

module.exports = router;
