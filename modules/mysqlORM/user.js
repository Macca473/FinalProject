const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('./initcont.js');

var users = sequelize.define("users", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    user_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    user_password: { type: DataTypes.INTEGER, allowNull: false },
    balance: { type: DataTypes.INTEGER, allowNull: false },
  }, {
      timestamps: false,
      freezeTableName: true,
});

module.exports = users;