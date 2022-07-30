const sequelize = require('../bd')
const {DataTypes} = require('sequelize')

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

module.exports = Type