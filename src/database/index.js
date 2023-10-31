const Sequelize = require('sequelize');
const configDB = require('../config/database')

const Veiculo = require('../models/veiculo')

const connection = new Sequelize(configDB)

Veiculo.init(connection)

module.exports = connection