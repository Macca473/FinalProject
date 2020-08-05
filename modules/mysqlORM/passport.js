
const Users = require('./user.js');

const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

module.exports = passport.use(new LocalStrategy({
  usernameField: 'user_name',
  passwordField: 'user_password'
},
  function(username, password, done) {
    Users.findOne({ where: {user_name: username}})
    .then( function (user) {
      // if (!user) {
      //   console.log("Incorrect username");
      //   return done(null, false, { message: 'Incorrect username.' });
      // }
      // console.log("ps1 " + typeof user.user_password);
      // console.log("ps2 " + typeof password);
      if (!(`${user.user_password}` === `${password}`)) {
        console.log("Incorrect password");
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch(err => done(err));
  }
));

// module.exports = passport.use(new LocalStrategy({
//   usernameField: 'user_name',
//   passwordField: 'user_password'
// },
// function(username, password, done) {
//   Users.findOne({ where: {user_name: username}})
//   .then(function (users) {
//       console.log(users)
//       if (!users) {
//           return done(null, false, { message: 'Incorrect username.' });
//       }
//       else if (!users.user_password == password) {
//           return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, users);
//   })
//   .catch(err => done(err));
// }
// ));
