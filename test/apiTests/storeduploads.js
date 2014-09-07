
/// Make an author!!
 // db.author.create({displayName: "Nancy Buckingham"}).success(function (newAuthor) {
 // 	console.log("new author", newAuthor);
 // });

// make an ebook!!
db.ebook.create({isbn: "12398734234234",
    title: "Bell Tolls",
    ebookUrl: "My fake url",
    coverImgUrl: "myFakeImage.img",
    description: "Blah blah",
    // what data type should I use? Float? Decimal?
    price: 17,
    priceCategory: "standard_book"}).success(function (bellTolls) {
    	console.log("bellTolls", bellTolls);
    });

    // // make an ebook!!
// db.ebook.create({isbn: "9781610848367",
//     title: "The October Cabaret",
//     ebookUrl: "http://www.belgravehouse.com/online/the-october-cabaret-p-713.html",
//     coverImgUrl: "http://www.belgravehouse.com/online/images/ebooks/the_october_cabaret_large.jpg",
//     description: "Inheriting a small antique shop from her uncle, Tess Pennicott moves to Brighton to run it herself. She soon encounters her first love, Ben Wyland, but cannot believe he still feels the same way about her. Finding a photograph of porcelain, taken in the shop, Ben recognises it as a famous piece of Sèvres and hugely valuable, but it is missing. Tracing this lead takes Tess to Prague and into grave danger. British Mystery/Romantic Suspense by Nancy Buckingham writing as Erica Quest; originally published by Doubleday for The Crime Club",
//     price: 5,
//     priceCategory: "standard_book"}).success(function (shinyEbook) {
//      console.log("shinyEbook", shinyEbook);
//     });

// // make an ebook!!
// db.ebook.create({isbn: "9781610848121",
//     title: "The Silver Castle",
//     ebookUrl: "http://www.belgravehouse.com/online/the-silver-castle-p-704.html",
//     coverImgUrl: "http://www.belgravehouse.com/online/images/ebooks/the_silver_castle_large.jpg",
//     description: "Gail Sherbrooke had believed her father died twenty years ago. And yet his obituary was now posted in the London Times. In an effort to find out the truth of the matter, Gail went to Switzerland to investigate. And despite her regrets for having done so, she found herself with a dubious legacy. Her search involved her in larceny and murder—to say nothing of danger… Gothic Romance by Nancy Buckingham writing as Erica Quest; originally published by Doubleday for the Crime Club",
//     price: 5,
//     priceCategory: "standard_book"}).success(function (shinyEbook) {
//      console.log("shinyEbook", shinyEbook);
//     });

// // make an ebook!!
// db.ebook.create({isbn: "9781610847773",
//     title: "The Jade Dragon",
//     ebookUrl: "http://www.belgravehouse.com/online/the-jade-dragon-p-686.html",
//     coverImgUrl: "http://www.belgravehouse.com/online/images/ebooks/the_jade_dragon_large.jpg",
//     description: "When orphaned Elinor Rosslyn is confronted by handsome Stafford Darville with news that her Portugese grandfather has died, Elinor is amazed, unaware she had relatives. She travels to Portugal to meet her grandmother, Contessa da Milaveira, and heal the family rift. At the Palacio, though by law she has a right to live there, she finds her life in danger. Who is her enemy? Gothic Romance by Nancy Buckingham; originally published by Robert Hale",
//     price: 5,
//     priceCategory: "standard_book"}).success(function (shinyEbook) {
//      console.log("shinyEbook", shinyEbook);
//     });

// make an ebook!!
// db.ebook.create({isbn: "9781610843690",
//     title: "Regency Masquerade",
//     ebookUrl: "http://www.regencyreads.com/online/regency-masquerade-p-274.html",
//     coverImgUrl: "http://www.regencyreads.com/online/images/ebooks/an_affair_of_the_heart.jpg",
//     description: "Moira Trevithick and her brother have been bilked of their family fortune by Lionel March, so they masquerade at a country inn as the vulgar Lady Crieff and her stepson, with a plan to take the scoundrel for everything he owes them. But they’re not the only ones interested in March, and they look very suspicious to one well-born gentleman. Regency Romance by Joan Smith; originally published by Fawcett Crest",
//     price: 5,
//     priceCategory: "standard_book"}).success(function (shinyEbook) {
//      console.log("shinyEbook", shinyEbook);
//     });


 // make an ebook!!
db.ebook.create({isbn: "9781610846530",
    title: "The Great Circus Train Robbery",
    ebookUrl: "http://www.belgravehouse.com/online/the-great-circus-train-robbery-p-622.html",
    coverImgUrl: "http://www.belgravehouse.com/online/images/ebooks/the_great_circus_train_robbery_large.jpg",
    description: "Second of the Northern Spy mysteries, following the Agatha winner The Pea Soup Poisonings. Who stole three red rail cars from Spence’s antique circus train? The hair-raising quest takes Zoe and Spence from a neighbor’s murky basement to the Quirkus Circus to help two wacky clowns—until one of them disappears… Agatha Finalist for Best Children’s/Young Adult Novel. Young Adult/Juvenile Mystery by Nancy Means Wright; originally published by Hilliard & Harris",
    price: 3,
    priceCategory: "novella"}).success(function (shinyEbook) {
    	console.log("shinyEbook", shinyEbook);
    });

    // better to associate book with author?
db.ebook.find(8).success(function (shinyEbook) {
    // console.log(shinyEbook);
    db.author.find(10).success(function (authoress) {
        // console.log("authoress.addEbook", authoress.addEbook);
        authoress.addEbook(shinyEbook);
        console.log(shinyEbook);
    });
});