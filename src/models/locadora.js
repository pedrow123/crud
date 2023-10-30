const { Model, DataTypes } = require('sequelize')

class Locadora extends Model {
    static init(sequelize) {
        super.init({
            locadora: DataTypes.STRING,
            modelo: DataTypes.STRING,
            marca: DataTypes.STRING,
            ano: DataTypes.INTEGER,
            motor: DataTypes.STRING,
            portas: DataTypes.INTEGER,
            cambio: DataTypes.STRING,
            ar_condicionado: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
}

module.exports = Locadora