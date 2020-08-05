const express = require("express");
const path = require("path");
const passport = require('./modules/mysqlORM/passport.js');
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const user = require('./modules/mysqlORM/user.js');

const usersinv = require('./modules/mysqlORM/usersinv.js');

const items = require('./modules/mysqlORM/items.js');


items.hasMany(usersinv, {foreignKey: 'item_id'});

usersinv.belongsTo(items, {foreignKey: 'item_id'});

user.hasMany(usersinv, {foreignKey: 'user_id'});

usersinv.belongsTo(user, {foreignKey: 'user_id'});

// router.get('/api/login', function(req, res) {
//   user.findAll()
//   .then(database => {
//     const json = database.map(val =>
//      val.get() )
//     console.log(json);
//     res.status(200).json({users: json})
//     .catch(err => {
//       res.json({
//           confirmation: 'fail',
//       })
//     })
//   })
// })

let newuser = {};

let userinfo = {};

// router.get('/api/newuser', function(req, res) {
//   res = {}
// });

router.post('/api/newuser', function(req, res) {
  // req.body["id"] = 0;
  res.send(200, req.body);
  newuser = req.body
  console.log("Req: " + JSON.stringify(newuser));
  
  user.create({
    user_name: `${newuser.user_name}`,
    user_password: newuser.user_password,
    balance: 10000,
  })
});

router.post('/api/login',
passport.authenticate('local', { session: false }),
function(req, res){
  let currentuser = req.body.user_name;
  
  console.log("userlog: " + currentuser);
  UserQuery();
    function UserQuery() {
      user.findOne({ where: {user_name: currentuser}})
      .then(thisuser => {
        let userid = thisuser.id;
        console.log("User info: " + JSON.stringify(userid));
        console.log("UserInv: " + UserInvQuery(userid))
        userinfo = UserInvQuery(userid);
      })
    }
    function UserInvQuery(userid) {
      usersinv.findAll({
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
        }]
      })
      .then(thisuserinv => {
        console.log(JSON.stringify({userinfo: thisuserinv}))
        res.status(200).json({userinfo: thisuserinv});
      })
    }
  })

  .get('/api/login', function(req, res) {
    testjson = {'color' : 'blue'}
    res.status(200).json(testjson)
    console.log("GettingData: " + JSON.stringify(testjson));
  })


  // router.get('/api/userinfo', function(req, res){

  // })


// router.delete('/api/books/:id', function(req, res) {
//   const id = req.params.id

//   user.findAll(id)
//   .then(database => {
//       res.json(database)
//   })
//   .catch(err => {
//       res.json({
//           confirmation: 'fail',
//       })
//   })
// });


// Send every other request to the React app


app.use(passport.initialize());
app.use(passport.session());

app.use(router);





// const local = require("./modules/mysqlORM/passport.js");

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

exports.newuser = newuser;
