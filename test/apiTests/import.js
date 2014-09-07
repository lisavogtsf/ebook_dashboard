// import.js
var db = require('../../models/index');

var importedEbooks =
[
  {
    "isbn":9781610847766,
    "title":"A Hero for Antonia",
    "ebookUrl":"http://www.regencyreads.com/online/a-hero-for-antonia-p-597.html",
    "coverImgUrl":"http://www.regencyreads.com/online/images/ebooks/a_hero_for_antonia_large.jpg",
    "description":"Antonia Fairfax was sent home from London by her secret fiancé, Charles Kenyon, because of a small indiscretion. But seven years have passed, with few letters from Charles. Now Antonia must return to London for her niece’s coming-out. Antonia knows she can never love anyone but Charles and looks forward to seeing him, but Viscount Kedrington does share her love of verbal sparring… Regency Romance by Elisabeth Kidd; originally published by Walker",
    "price":5,
    "priceCategory":"standard_book"
  },
  {
    "isbn":9781610847810,
    "title":"A Suspicion of Witchcraft",
    "ebookUrl":"http://www.belgravehouse.com/online/a-suspicion-of-witchcraft-p-688.html",
    "coverImgUrl":"http://www.belgravehouse.com/online/images/ebooks/a_suspicion_of_witchcraft_large.jpg",
    "description":"In Salem in 1692, as the paranoia leading to the famous trials is heating up, Rebecca Martin, a midwife and healer, tries desperately to save her son Michael, who has been accused of murder. Harassed by Magistrate John Hathorne, the novelist's ancestor, she finds the suspicion of witchcraft hovering about her pushing both her and Michael toward a last walk to the hanging tree on gallows hill. Colonial Historical Mystery by Stephen Lewis; originally published by Belgrave House",
    "price":5,
    "priceCategory":"standard_book"
  },
  {
    "isbn":9781610848022,
    "title":"A Summer in Paris",
    "ebookUrl":"http://www.belgravehouse.com/online/a-summer-in-paris-p-699.html",
    "coverImgUrl":"http://www.belgravehouse.com/online/images/ebooks/a_summer_in_paris_large.jpg",
    "description":"Love, surprises, and difficult decisions await three friends who travel to Paris, the world’s most romantic city. Nina, who loves everything French, finds more than she expected while investigating a family secret. Kristy, outshone by her sisters, decides to reinvent herself – and discovers she’s not the only one with something to hide. And Jennifer, a reluctant traveler, learns that things aren’t always what they seem. Young Adult Fiction by Cynthia Baxter writing as Cynthia Blair; originally published by Fawcett Juniper",
    "price":5,
    "priceCategory":"standard_book"
  },
  {
    "isbn":9781610848138,
    "title":"A Woman's Touch",
    "ebookUrl":"http://www.belgravehouse.com/online/a-womans-touch-p-705.html",
    "coverImgUrl":"http://www.belgravehouse.com/online/images/ebooks/a_womans_touch_large.jpg",
    "description":"Jefferson Lawrence had been accused of theft and betrayed by the woman he loved. But when his ex-wife, Paige Randall, offers him a consulting job, she also offers him a chance to prove his innocence. But if he returns to Randall Electronics and Paige, he will have to risk the new life he’s begun in order to reclaim the love he can’t live without. Contemporary Romance by Karen Toller Whittenburg; originally published by Dell Ecstasy",
    "price":5,
    "priceCategory":"standard_book"
  },
  {
    "isbn":9781610848312,
    "title":"A Kiss in the Dark",
    "ebookUrl":"http://www.regencyreads.com/online/a-kiss-in-the-dark-p-626.html",
    "coverImgUrl":"http://www.regencyreads.com/online/images/ebooks/a_kiss_in_the_dark_large.jpg",
    "description":"Cressida Charmsworth inherited the title of Baroness deCourcy from her father. A country girl (of twenty-three), she also inherited alarming wealth and gave herself two London seasons. Wishing to have a relaxing vacation by the sea, she attempted to rent Lord Dauntry’s adorable Swiss-style cottage. But he refused, though his mother offered the dower house next door. Ghostly sounds, midnight excursions, an undesirable relative, all disturbed Cressida’s stay. Regency Romance by Joan Smith; originally published by Fawcett Crest",
    "price":5,
    "priceCategory":"standard_book"
  },
  {
    "isbn":9781610848251,
    "title":"Once There Was a Fat Girl",
    "ebookUrl":"http://www.belgravehouse.com/online/once-there-was-a-fat-girl-p-710.html",
    "coverImgUrl":"http://www.belgravehouse.com/online/images/ebooks/once_there_was_a_fat_girl_large.jpg",
    "description":"Martha Nowicki had progressed from chubby to fat without really noticing. And she always settled for less than she wanted. But when she was passed over for a promotion at her job, and her boyfriend Eddie deserted her, she knew she’d have to make a change. But even losing weight complicated things—suddenly there were two men in her life, and two companies wanting her skills. Young Adult Fiction by Cynthia Baxter writing as Cynthia Blair; originally published by Fawcett",
    "price":5,
    "priceCategory":"standard_book"
  },
  {
    "isbn":9781610848206,
    "title":"A Respectable Female",
    "ebookUrl":"http://www.regencyreads.com/online/a-respectable-female-p-619.html",
    "coverImgUrl":"http://www.regencyreads.com/online/images/ebooks/a_respectable_female_large.jpg",
    "description":"The legendarily libidinous Loversalls are notorious for their amorous adventures, their erotic escapades. Alas, Beau Loversall has lost his enthusiasm for such pursuits. It is, he fears, a result of advancing age. But then he reluctantly rescues an innocent, Miss Penelope Parrish, and must provide her a proper duenna… A comedy of manners, Regency style. Regency Romance Novella by Maggie MacKeever; originally published by Vintage Ink Press",
    "price":3,
    "priceCategory":"novella"
  },
  {
    "isbn":9781610848237,
    "title":"More than a Dream",
    "ebookUrl":"http://www.belgravehouse.com/online/more-than-a-dream-p-709.html",
    "coverImgUrl":"http://www.belgravehouse.com/online/images/ebooks/more_than_a_dream_large.jpg",
    "description":"Catherine Stanhope came from a privileged background in Victorian England. But instead of desiring to make a good marriage, she was determined to be a nurse, to follow in the footsteps of Florence Nightingale. Her dream took her to the battlefields of the Crimean War, where she met and was challenged by Dr. Michael Soames. First of the Angels of Mercy trilogy. Historical Romance by Martha Schroeder; originally published by Zebra",
    "price":5,
    "priceCategory":"standard_book"
  }
];
// console.log("type of data I'm feeding in: ", typeof importedEbooks);
// console.log(importedEbooks);
// console.log(importedEbooks[0]);


// var newEbooks = JSON.parse(importedEbooks);
// var jsEbooks = [];

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

//didn't work in a loop, but manually incremented, and that worked ok. Timing of success?

	var currentEbook = importedEbooks[8];
	db.ebook.create({
		isbn: currentEbook.isbn,
	    title: currentEbook.title,
	    ebookUrl: currentEbook.ebookUrl,
	    coverImgUrl: currentEbook.coverImgUrl,
	    description: currentEbook.description,
	    price: currentEbook.price,
	    priceCategory: currentEbook.priceCategory})
	.success(function (shinyEbook) {
	    	console.log("shinyEbook", shinyEbook);
	    	// jsEbooks.push(shinyEbook);
	    });

// console.log("jsEbooks, ", jsEbooks);

