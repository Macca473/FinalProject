const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const user = require('../modules/mysqlORM/user.js');

const usersinv = require('../modules/mysqlORM//usersinv.js');

const items = require('../modules/mysqlORM/items.js');

user.hasMany(usersinv, {foreignKey: 'user_id'});

usersinv.belongsTo(user, {foreignKey: 'user_id'});

items.hasMany(usersinv, {foreignKey: 'item_id'});

usersinv.belongsTo(items, {foreignKey: 'item_id'});

module.exports = function UserInvQuery(userid) {
  console.log("userid: " + JSON.stringify(userid) + " " + typeof userid);
     return usersinv.findAll({
      where: { user_id: { [Op.eq]: userid } },
      attributes: ['amount'],
      include: [{
        model: user,
        as: 'user',
        attributes: ['user_name','balance']
      },
      {
        model: items,
        as: 'item',
        attributes: ['item_name','cost','popularity','idealtod','idealweather','idealtemp','item_image']
      }],
      raw: true,
      nest: true,
    })
    .catch(err => {
        console.log(err);
      })
  }
