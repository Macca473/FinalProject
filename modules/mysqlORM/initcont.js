"use strict";

// var fs = require("fs");
// var path = require("path");
const { Sequelize, Model, DataTypes } = require('sequelize');

// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// const newbook = require('../server.js');
// console.log("newbook in cont: " + newbook);
const DATABASE_URL = 'mysql://b3f5e07c7edcef:3f868844@eu-cdbr-west-03.cleardb.net/heroku_268f9e05866c229?reconnect=true'
var db = {};

// let createobj = require()

// if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize('heroku_268f9e05866c229', 'b3f5e07c7edcef', '3f868844', {
    host: 'eu-cdbr-west-03.cleardb.net',
    port: '3306',
    dialect:'mysql'
  })
// } else {
//   var sequelize = new Sequelize('finalprojstore_db', 'root', 'Ss17091997', {
//     host: 'localhost',
//     port: '5000',
//     dialect:'mysql'
//   })
// };

async function testconnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testconnection()

// console.log("db: " + JSON.stringify(Books.findAll()));

module.exports = sequelize;



