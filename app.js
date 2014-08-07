// Lisa Vogt
// WDI-SF-July-2014
// app.js routing file for express server
// starter template for app.js from
// https://github.com/wdi-sf-july/final_passport_example/blob/master/app.js

var express = require('express'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  passportLocal = require('passport-local'),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session'),
  flash = require('connect-flash'),
  // a module for help making async requests
  async = require('async'),
  request = require('request');
var db = require('./models/index');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
// allow access to local stylesheet
app.use(express.static(__dirname + '/public'));

// set up cookie sessions
app.use(cookieSession({
  secret: "mysecretkey",
  name: "session with cookie data",
  maxage: 360000
  })
);
// get passport started
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// set up passport serializer
passport.serializeUser(function(user, done){
  console.log("SERIALIZED JUST RAN");
  done(null, user.id);
});

// set up passport deserializer
passport.deserializeUser(function(id, done){
  console.log("DESERIALIZED RAN JUST NOW");
  db.user.find({
    where: {
      id: id
    }
  })
  .done(function(error, user){
    done(error, user);
  });
});


// set up root route, check if user is logged in
// redirect to home or login
app.get('/', function(req, res){
  if(!req.user) {
    res.render('login');
  } else {
    res.redirect('/home');  
  }
});

// set up login route, will change with passport
app.get('/login', function(req, res){
  console.log("before checking req.user:", req.user);
  if (!req.user) {
    res.render('login', {message: req.flash('loginMessage'), username: ""});
  } else {
    res.redirect('home');
  }
  // res.render('login');
  // console.log("req.body ", req.body);
  // // console.log('LOGIN PAGE SHOULD BE WORKING');
});

// set up signup route, will change with passport
app.get('/signup', function(req, res){
  if(!req.user) {
    res.render("signup", { username: ""});
  } else {
    res.redirect('/home');
  }
});

app.get('/home', function(req, res){
  res.render('home', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.post('/submit', function(req, res){
  console.log('after signup, req ', req);
  db.user.createNewUser(req.body.username, req.body.password,
    function(err){
      res.render('signup', {message: err.message, username: req.body.username});
    },
    function(success){
      res.render('home', {message: success.message});
    });
});

//authenticate users when logging in
app.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// set up signup route, will change with passport
app.get('/details', function(req, res){
  res.render('details');
});



// works to get all prices
app.get('/search', function(req, res){  

  db.ebook.findAll().success(function(ebooks){
    console.log("THESE ARE OUR EBOOKS!");
    console.log(typeof ebook);
  // db.author.find()

  db.author.findAll().complete(function(err, authors){
    console.log("these are the authors, ", authors);

          
    async.parallel([  
    // US pricing
    function(done){
    var searchRequest = req.query.searchTerm;
    var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=us";
    request(searchURL, function(error, response, body){
      if (!error && response.statusCode == 200) {
        // console.log(body) 
        var data = JSON.parse(body);
        // below shows whole object of result 0
        // console.log(data.results[0]);
        done(null, data.results[0]);
      }
    });
  },
  // UK pricing
    function(done){
      var searchRequest = req.query.searchTerm;
      var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=gb";
      request(searchURL, function(error, response, body){
        if (!error && response.statusCode == 200) {
          // console.log(body) 
          var data = JSON.parse(body);
          // below shows whole object of result 0
          // console.log(data.results[0]);
          done(null, data.results[0]);
        }
      });
    },
    // Australian pricing
    function(done){
      var searchRequest = req.query.searchTerm;
      var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=au";
      request(searchURL, function(error, response, body){
        if (!error && response.statusCode == 200) {
          // console.log(body) 
          var data = JSON.parse(body);
          // below shows whole object of result 0
          // console.log(data.results[0]);
          done(null, data.results[0]);
        }
      });
    },
    // canadian pricing
    function(done){
      var searchRequest = req.query.searchTerm;
      var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=ca";
      request(searchURL, function(error, response, body){
        if (!error && response.statusCode == 200) {
          // console.log(body) 
          var data = JSON.parse(body);
          // below shows whole object of result 0
          // console.log(data.results[0]);
          done(null, data.results[0]);
        }
      });
    },
    // french pricing
    function(done){
      var searchRequest = req.query.searchTerm;
      var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=fr";
      request(searchURL, function(error, response, body){
        if (!error && response.statusCode == 200) {
          // console.log(body) 
          var data = JSON.parse(body);
          // below shows whole object of result 0
          // console.log(data.results[0]);
          done(null, data.results[0]);
        }
      });
    },
    // german pricing
    function(done){
      var searchRequest = req.query.searchTerm;
      var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=de";
      request(searchURL, function(error, response, body){
        if (!error && response.statusCode == 200) {
          // console.log(body) 
          var data = JSON.parse(body);
          // below shows whole object of result 0
          // console.log(data.results[0]);
          done(null, data.results[0]);
        }
      });
    }
  ],function(err, iTunesResults){

    // console.log("ebooks,", ebooks);
      res.render("details", {
        iTunesResults: iTunesResults,
        searchRequest: req.query.searchTerm,
        authors: authors,
        ebooks: ebooks
      });
    });
   });
  });
});

// For any incorrect URL routes 
app.get('/*', function(req,res){
  res.status(404);
  res.render('error');
  // res.redirect('login');
  // console.log('ERROR PAGE WORKING PROPERLY IF THIS SHOWS UP');
});


app.listen((process.env.PORT || 3000), function(){
  console.log("We only care about port 3000. How does that make the other ports feel?");  
});