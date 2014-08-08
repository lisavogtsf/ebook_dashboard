// user.js, based on final_passport example
var bcrypt = require('bcrypt'),
  passport = require('passport'),
  passportLocal = require('passport-local'),
  salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('user', {
     username: { 
        type: DataTypes.STRING, unique: true, allowNull: false, validate: {
          len: [6, 30]
        }
    },
    password: DataTypes.STRING
    },
    
  {
    classMethods: {
      encryptPass: function(password) {
        var hash = bcrypt.hashSync(password, salt);
        return hash;
    }, 
      comparePass: function(userpass, dbpass) {
      // don't salt twice when you compare
        return bcrypt.compareSync((userpass), dbpass);  
    },
      createNewUser:function(username, password, err, success) {
        if(password.length < 6) {
          err({message: "Password should be more than six characters"});
        }
        else{
        User.create({
            username: username,
            password: this.encryptPass(password)
          }).error(function(error) {
            console.log("error log shows up here");
            // console.log(error);
            if(error.username){
              err({message: 'Your username should be at least 6 characters long', username: username});
            }
            else{
              err({message: 'An account with that username already exists', username: username});
              }
          }).success(function(user) {
            console.log("A new account was created, in createNewUser method, using signup");
            success({message: 'Account created, please log in now'});
          });
        }
      },  
    
      } // close classMethods
    } //close classMethods outer 

  ); // close define user

  passport.use(new passportLocal.Strategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback : true
    },

    function(req, username, password, done) {
      // find a user in the DB
      User.find({
          where: {
            username: username
          }
        })
        // when that's done, 
        .done(function(error,user){
          if(error){
            console.log(error);
            return done (err, req.flash('loginMessage', 'Oops! Something went wrong.'));
          }
          if (user === null){
            return done (null, false, req.flash('loginMessage', 'Username does not exist.'));
          }
          if ((User.comparePass(password, user.password)) !== true){
            return done (null, false, req.flash('loginMessage', 'Invalid Password'));
          }
          done(null, user); 
        });
    }));
      
  return User;
}; // close User function


