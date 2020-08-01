"use strict";

// var fs = require("fs");
// var path = require("path");
const { Sequelize, Model, DataTypes } = require('sequelize');
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// const newbook = require('../server.js');
// console.log("newbook in cont: " + newbook);
const DATABASE_URL = 'postgres://mlijmmhvjxijve:d985111fbfd3e10d5395527fd0c95c34718008f5068fe9f9c98f087aba35ea31@ec2-34-225-162-157.compute-1.amazonaws.com:5432/d3nup472i70sq8'
var db = {};

// let createobj = require()

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true //false
  })
} else {
  var sequelize = new Sequelize('finalprojstore_db', 'root', 'Ss17091997', {
    host: 'localhost',
    port: '5000',
    dialect:'mysql'
  })
};



  var users = sequelize.define("users", {
      // Id: { type: DataTypes.INTEGER, allowNull: false },
      user_name: { type: DataTypes.STRING, allowNull: false },
      user_password: { type: DataTypes.INTEGER, allowNull: false },
      balance: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        timestamps: false,
  });

// console.log(Books === sequelize.models.Books);

// Createbook(bookobj => {
//   Books.create(
//     {title: booksobj.title},
//     {authors: booksobj.authors},
//     {discription: booksobj.discription},
//     {image: booksobj.image},
//     {link: booksobj.link}
//   );
// });



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

module.exports = users;



