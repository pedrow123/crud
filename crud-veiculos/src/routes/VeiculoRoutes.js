const express = require('express');
const veiculoController = require('../controller/VeiculoController');

const router = express.Router();

router.use('/', veiculoController);

module.exports = router;