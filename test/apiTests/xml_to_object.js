var parseString = require('xml2js').parseString;
// paste in xml to parse
var xml = "<result><doc_id>36148734</doc_id><access_key>key-ejnmjcv3b1ef7azwuyy</access_key><title><![CDATA[Using Ruby on Rails for Web Development, Introduction Guide to Ruby on Rails: An extensive roundup of 100 Ultimate Resources]]></title><description><![CDATA[Ruby on Rails is a highly-productive and industrial-strength web application framework. It scales from the simplest expense tracking application to full-featured applications with respectable numbers of users.  Ruby is a pure object-oriented programming language with a super clean syntax that makes programming elegant and fun. Ruby successfully combines Smalltalk's conceptual elegance, Python's ease of use and learning, and Perl's pragmatism.  Maybe you've heard about Ruby on Rails, the super productive new way to develop web applications, and you'd like to give it a try, but you don't know anything about Ruby or Rails.  This book steps through the development of a web application using Rails. It won't teach you how to program in Ruby, but if you already know another object-oriented programming language, you should have no problem following along.  This book is a great introduction to Ruby on Rails.]]></description><tags><![CDATA[web development,ruby on rails,web application]]></tags><license>c</license><thumbnail_url>http://imgv2-4.scribdassets.com/img/word_document/36148734/111x142/1ddbffd3d7/1397094735</thumbnail_url><page_count>170</page_count><download_formats></download_formats><reads>5644</reads><uploaded_by><![CDATA[EmereoPublishing]]></uploaded_by><uploader_id>13617350</uploader_id><when_uploaded>2010-08-20T02:37:06Z</when_uploaded><when_updated>2014-04-05T22:26:41Z</when_updated><block_count>0</block_count></result>" 

parseString(xml, function (err, result) { 
    console.log(result); 
  });

// parseString(xml, function (err, result) { 
//     console.log(result); 
//     console.log(result.title[0]);
//   });


// var newObj = parseString(xml, function (err, result){console.log("title: ", newObj.title);});

// console.log("title: ", newObj.title);
// console.log("desc ", newObj.description);
// console.log("page count, ", newObj.page_count);