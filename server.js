const express = require("express");
const path = require("path");
const passport = require('./modules/mysqlORM/passport.js');
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
const helmet = require('helmet');

const QueryUserInfo = require('./controllers/CurrentUserFun.js');
const QueryUserinvInfo = require('./controllers/CurrentUserinvFun.js');

const ModdedItemInfo = require('./controllers/WeatherAPI_ItemPref_Mix.js')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



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



let userinfo = {};

// router.get('/api/newuser', function(req, res) {
//   res = {}
// });

// router.post('/api/newuser', function(req, res) {
//   // req.body["id"] = 0;
//   res.send(200, req.body);
//   newuser = req.body
//   // console.log("Req: " + JSON.stringify(newuser));
  
//   user.create({
//     user_name: `${newuser.user_name}`,
//     user_password: newuser.user_password,
//     balance: 10000,
//   })
// });

let currentuserid = {};

router.post('/api/login',
passport.authenticate('local', { session: false }),
function(req, res){
  // let currentuser = req.body.user_name;
  // console.log("userlog: " + currentuser);
  QueryUserInfo(req.body.user_name).then(function(result){
    console.log("Post Data: " + JSON.stringify(result) + " " + typeof result);
    res.status(200).json(result);
    currentuserid = result
   });
})

router.get('/api/userinfo', function(req, res) {
//  QueryUserinvInfo(currentuserid.id).then(function(result){
//   console.log("GettingData: " + JSON.stringify(result) + " " + typeof result);
//   res.status(200).send({'userinv': result})
//   });
    ModdedItemInfo(currentuserid.id).then(function(result) {
      console.log("GettingData: " + JSON.stringify(result) + " " + typeof result);
      res.status(200).send({'userinv': result})
    });
})

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
app.use(helmet());





// const local = require("./modules/mysqlORM/passport.js");

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});