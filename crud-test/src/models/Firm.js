const Sequelize = require('sequelize');
const connection = require('../config/database'); // Importe a conexão do arquivo database.js

const Firm = connection.define('firm', {
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Firm;