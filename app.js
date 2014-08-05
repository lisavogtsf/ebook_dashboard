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
  request = require('request');
var db = require('./models/index');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
// allow access to local stylesheet
app.use(express.static(__dirname + '/public'));
console.log(__dirname);

// set up cookie sessions

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

app.get('/search', function(req, res){
  // console.log(req.query.searchTerm);
  // event.preventDefault();
  // how to keep from putting search in url
  var searchRequest = req.query.searchTerm;
  var searchURL = "http://itunes.apple.com/lookup?isbn=" + searchRequest;
  console.log("search URL, ", searchURL);
  request(searchURL, function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log(body) 
      var data = JSON.parse(body);
      // below shows whole object of result 0
      console.log(data.results[0]);
      var iTunesResults = data.results[0];
      res.render("test", {iTunesResults: iTunesResults || []});

    }
  });
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