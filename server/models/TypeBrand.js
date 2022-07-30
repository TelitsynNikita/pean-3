const sequelize = require('../bd')
const {DataTypes} = require('sequelize')

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

module.exports = TypeBrand