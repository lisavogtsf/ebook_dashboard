// Lisa Vogt
// WDI-SF-July-2014
// app.js routing file for express server

var express = require('express'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  passportLocal = require('passport-local'),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session'),
  flash = require('flash-connect');
var db = require('./models/index');
var app = express();

app.set('view enginge', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

// set up cookie sessions

// set up passport serializer

// set up passport deserializer

// set up routes

// For any incorrect URL routes 
app.get('*', function(req,res){
  res.status(404);
  res.render('error');
});


app.listen(3000, function(){
  console.log("We only care about port 3000. Does that make the other ports feel unpopular?");  
});