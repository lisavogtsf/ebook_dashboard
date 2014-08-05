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

// set up passport serializer

// set up passport deserializer

// set up routes

// set up root route, redirect to login
app.get('/', function(req, res){
  res.redirect('/login');
  console.log("redirecting to login");
});

// set up login route, will change with passport
app.get('/login', function(req, res){
  res.render('login');
  console.log("req.body ", req.body);
  // console.log('LOGIN PAGE SHOULD BE WORKING');
});

// set up signup route, will change with passport
app.get('/signup', function(req, res){
  res.render('signup');
});

// set up signup route, will change with passport
app.get('/details', function(req, res){
  res.render('details');
});

// works but I want to try for multiple prices
app.get('/search', function(req, res){
  // UK pricing
  async.parallel([
    function(done){
    var searchRequest = req.query.searchTerm;
    var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest + "&country=us";
    request(searchURL, function(error, response, body){
      if (!error && response.statusCode == 200) {
        // console.log(body) 
        var data = JSON.parse(body);
        // below shows whole object of result 0
        console.log(data.results[0]);
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
          console.log(data.results[0]);
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
          console.log(data.results[0]);
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
          console.log(data.results[0]);
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
          console.log(data.results[0]);
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
          console.log(data.results[0]);
          done(null, data.results[0]);
        }
      });
    }
  ], function(err, iTunesResults){
      res.render("test", {
        iTunesResults: iTunesResults,
        searchRequest: req.query.searchTerm
      });
  })


});




// For any incorrect URL routes 
app.get('/*', function(req,res){
  res.status(404);
  res.render('error');
  // res.redirect('login');
  // console.log('ERROR PAGE WORKING PROPERLY IF THIS SHOWS UP');
});


app.listen(3000, function(){
  console.log("We only care about port 3000. How does that make the other ports feel?");  
});