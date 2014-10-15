// Lisa Vogt
// WDI-SF-July-2014
// app.js routing file for express server
// starter template for app.js from
// https://github.com/wdi-sf-july/final_passport_example/blob/master/app.js

var express = require('express'),
	locus = require ('locus'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	passportLocal = require('passport-local'),
	cookieParser = require('cookie-parser'),
	cookieSession = require('cookie-session'),
	flash = require('connect-flash'),
	// a module for help making async requests
	async = require('async'),
	request = require('request');
//default page title 
var pageTitle = "Node.js";
var loggedIn = false;
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

// ok for logged in or not
app.get('/', function(req, res){
	if(!req.user) {
		console.log('render index without username because not logged in')
		pageTitle = "Index";
		res.render('index', {username: "", pageTitle: pageTitle});
	} else {
		// render index with username
		username = req.user.username;
		pageTitle = "Index";
		res.render('index', {username: username, pageTitle: pageTitle});
	}
});

// set up login route, will change with passport
app.get('/login', function(req, res){
	// console.log("before checking req.user:", req.user);
	if (!req.user) {
		pageTitle = "Login";
		res.render('login', {message: req.flash('loginMessage'), username: "", pageTitle: pageTitle});
	} else {
		console.log('redirected to search from LOGIN because already logged in')
		res.redirect('search');
	}
});

// set up signup route, will change with passport
app.get('/signup', function(req, res){
	if(!req.user) {
		pageTitle = "Signup";
		res.render("signup", { username: "", pageTitle: pageTitle});
	} else {
		console.log('redirected to search from SIGNUP because already logged in')
		res.redirect('search');
	}
});

// user account page, requires login
app.get('/account', function(req, res){
	console.log("arrives at account route before testing for logged in or not")
	if (!req.user){
		console.log("if User is NOT logged in on /account, redirects to login")
		res.redirect('login');
	} else {
		// user logged in
		username = req.user.username;
		console.log("in account route ********** username: ", req.user.username)
		pageTitle = 'User Account';
		res.render('account', {username: username, pageTitle: pageTitle});
	}
});

// route to search/user search make available to public
app.get('/search', function(req, res){
	console.log("arrives at search route before testing for logged in or not")
	if (!req.user){
		console.log("User is NOT logged in on /search, redirects to login")
		db.ebook.findAll().success(function(ebooks){
			username = "";
			pageTitle = "Search";
			res.render('search', {
				isAuthenticated: req.isAuthenticated(), // remove?
				user: req.user,
				username: username,
				pageTitle: pageTitle,
				ebooks: ebooks
			});
		});
	} else {
		console.log("User is logged in on /search")
		db.ebook.findAll().success(function(ebooks){
			username = req.user.username; 
			console.log("username work in search, logged in? ", username)
			pageTitle = "Search";
			res.render('search', {
				isAuthenticated: req.isAuthenticated(), // remove?
				user: req.user,
				username: username,
				pageTitle: pageTitle,
				ebooks: ebooks
			});
		});
	}
});

// submit signup user from /signup
app.post('/signup', function(req, res){
	// error happens shortly after this
	console.log('******after post/signup, before createNewUser, req= ', req.body);
	db.user.createNewUser(req.body.username, req.body.password,
		function(err){
			// error creating new user, why render not redirect? To pass parameters?
			// unsuccessful signup
			console.log("There was an error in createNewUser, so rendering signup form")
			username = "";
			pageTitle = "Signup";
			res.render('signup', {message: err.message, username: username, pageTitle: pageTitle});
		},
		function(success){
			// success sends to search, and /search render route supplies variables
			console.log('Confirming a new user signed up and new user was created');
			console.log("User should be logged in on /search")
				db.ebook.findAll().success(function(ebooks){
					username = req.user.username;
					pageTitle = "Search";
					res.render('search', {
						isAuthenticated: req.isAuthenticated(), // remove?
						user: req.user,
						username: username,
						pageTitle: pageTitle,
						ebooks: ebooks
					});
				});
		});
});

// // results route, maybe just for testing
// app.get('/results', function(req, res){
//   if(!req.user) {
//     res.render('login');
//   } else {
//     db.ebook.findAll().success(function(ebooks){
//       res.render('results', {ebooks: ebooks});
//     });  
//   }
// });

//authenticate users when logging in
app.post('/login', passport.authenticate('local', {
	successRedirect: '/search',
	failureRedirect: '/login',
	failureFlash: true
}));

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});


// works to get all prices
app.get('/ISBNsearch', function(req, res){

	var searchRequest = req.query.searchTerm;

	db.ebook.find({where: {isbn: searchRequest}}).success(function(ebook){
		// console.log("THESE ARE OUR EBOOKS!");
		// console.log(typeof ebook);
					
		async.parallel([  
		// US pricing
		function(done){
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
		ebook.getAuthor().success(function (writer) {
			pageTitle = "Search Results";
			username = req.user.username;
			res.render("details", {
				iTunesResults: iTunesResults,
				searchRequest: req.query.searchTerm,
				pageTitle: pageTitle,
				username: username,
				author: writer,
				ebook: ebook
			});
		});
	});
});
});

// For any incorrect URL routes 
app.get('/*', function(req,res){
	pageTitle = "Error";
	username = req.user.username;
	res.status(404);
	res.render('error', {username: username, pageTitle: pageTitle});
	// res.redirect('login');
	// console.log('ERROR PAGE WORKING PROPERLY IF THIS SHOWS UP');
});


app.listen((process.env.PORT || 3000), function(){
	console.log("We only care about port 3000. How does that make the other ports feel?");  
});

module.exports = app;
