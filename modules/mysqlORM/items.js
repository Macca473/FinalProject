const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('./initcont.js');

var items = sequelize.define("items", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    item_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    cost: { type: DataTypes.INTEGER, allowNull: false },
    popularity: { type: DataTypes.INTEGER, allowNull: false },
    idealtod: { type: DataTypes.INTEGER, allowNull: false },
    idealweather: { type: DataTypes.INTEGER, allowNull: false },
    idealtemp: { type: DataTypes.INTEGER, allowNull: false },
    item_image: { type: DataTypes.STRING, allowNull: false },
  }, {
      timestamps: false,
      freezeTableName: true,
});

module.exports = items;