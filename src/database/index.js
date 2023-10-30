const Sequelize = require('sequelize');
const configDB = require('../config/database')

const Locadora = require('../models/locadora')

const connection = new Sequelize(configDB)

Locadora.init(connection)

module.exports = connection