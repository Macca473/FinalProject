const express = require("express");
const path = require("path");
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

// Define API routes here

const db = require('./modules/mysqlORM/initcont.js');

router.get('/api/login', function(req, res) {
  db.findAll()
  .then(database => {
    const json = database.map(val =>
     val.get() )
    console.log(json);
    res.status(200).json({users: json})
    .catch(err => {
      res.json({
          confirmation: 'fail',
      })
    })
  })
})

let newuser = {};

// router.get('/api/newuser', function(req, res) {
//   res = {}
// });

router.post('/api/newuser', function(req, res) {
  // req.body["id"] = 0;
  res.send(200, req.body);
  newuser = req.body
  console.log("Req: " + JSON.stringify(newuser));
  
  db.create({
    user_name: `${newuser.user_name}`,
    user_password: newuser.user_password,
    balance: 10000,
  })
});

// router.delete('/api/books/:id', function(req, res) {
//   const id = req.params.id

//   db.findAll(id)
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

app.use(router);



// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

exports.newuser = newuser;
