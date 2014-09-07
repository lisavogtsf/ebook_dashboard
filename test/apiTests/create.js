// create.js
var db = require('../../models/index');
//var Sequelize = require('sequelize');


 //db.author.find(2).success(function (found) {found.getBooks().success(function (books) {console.log("books", books)})});

// // Make an author!!
//  db.author.create({displayName: "Martha Schroeder"}).success(function (newAuthor) {
//  	console.log("new author", newAuthor);
//  });

// make an ebook!!
// db.ebook.create({isbn: "9781610843690",
//     title: "Regency Masquerade",
//     ebookUrl: "http://www.regencyreads.com/online/regency-masquerade-p-274.html",
//     coverImgUrl: "http://www.regencyreads.com/online/images/ebooks/an_affair_of_the_heart.jpg",
//     description: "Moira Trevithick and her brother have been bilked of their family fortune by Lionel March, so they masquerade at a country inn as the vulgar Lady Crieff and her stepson, with a plan to take the scoundrel for everything he owes them. But they’re not the only ones interested in March, and they look very suspicious to one well-born gentleman. Regency Romance by Joan Smith; originally published by Fawcett Crest",
//     price: 5,
//     priceCategory: "standard_book"}).success(function (shinyEbook) {
//     	console.log("shinyEbook", shinyEbook);
//     });

// // // better to associate book with author?
db.ebook.find(23).success(function (shinyEbook) {
	// console.log(shinyEbook);
	db.author.find(18).success(function (authoress) {
		// console.log("authoress.addEbook", authoress.addEbook);
		authoress.addEbook(shinyEbook);
		console.log(shinyEbook);
	});
});

// // to associate books with author--not as good?
// db.author.find(9).success(function (ernest) {
// 	ernest.getEbooks().success(function (allBooks) {
// 		console.log("ernest's ebooks", allBooks);
// 	});
// });

// db.author.find(12).success(function (writer) {
// 	writer.getEbooks().success(function (books) {
// 		console.log("books", books);
// 	});
// });

// // find the author of a given book
// db.ebook.find(14).success(function (book) {
// 	book.getAuthor().success(function (author) {
// 		console.log("author", author);
// 	});
// });