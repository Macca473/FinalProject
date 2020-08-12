const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const user = require('../modules/mysqlORM/user.js');

const usersinv = require('../modules/mysqlORM//usersinv.js');

const items = require('../modules/mysqlORM/items.js');

user.hasMany(usersinv, {foreignKey: 'user_id'});

usersinv.belongsTo(user, {foreignKey: 'user_id'});

items.hasMany(usersinv, {foreignKey: 'item_id'});

usersinv.belongsTo(items, {foreignKey: 'item_id'});

module.exports = function UserQuery(currentuser) {
    console.log("currentuser: " + currentuser)
    return user.findOne({ where: {user_name: currentuser},
        raw: true,
        nest: true,
    })
    .catch(err => {
        console.log(err);
    })
};