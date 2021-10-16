const express = require('express');
const router = express.Router();

console.log(router);
const inforController = require('../resources/controllers/InforController');

router.use('/', inforController.handler);

module.exports = router;
