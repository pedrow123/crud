const Sequelize = require('sequelize');
const connection = require('../config/database'); // Importe a conexão do arquivo database.js

const Firm = connection.define('veiculos', {
  locadora:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type:Sequelize.INTEGER,
    allowNull: false,
  },
  motor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  portas: {
    type:Sequelize.INTEGER,
    allowNull: false,
  },
  cambio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ar_condicionado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },

})

connection.sync({force: false})

module.exports = Firm;