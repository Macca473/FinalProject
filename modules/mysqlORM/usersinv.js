const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('./initcont.js');

var usersinv = sequelize.define("usersinv", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    item_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.INTEGER, allowNull: false },
  }, {
      timestamps: false,
      freezeTableName: true,
});



module.exports = usersinv;