const express = require('express');
const firmController = require('../controller/FirmController');

const router = express.Router();

router.use('/', firmController);

module.exports = router;