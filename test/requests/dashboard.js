// test page for site.js
var app = require('../../app.js'),
  request = require('supertest');

describe("Root", function(){
  it("should give 200", function(done){
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe("login", function(){
  it("should give 200", function(done){
    request(app)
      .get('/login')
      .expect(200)
      .end(done);
  });
});

describe("signup", function(){
  it("should give 200", function(done){
    request(app)
      .get('/signup')
      .expect(200)
      .end(done);
  });
});

describe("home", function(){
  it("should give 200", function(done){
    request(app)
      .get('/home')
      .expect(200)
      .end(done);
  });
});

// // how should error respond?
// describe("error", function(){
// 	it("should give 200", function(done){
// 		request(app)
// 		.get('/error')
// 		.expect(200)
// 		.end(done);
// 	});
// });

// // timing out on too-long API call?
// // or because it needs a search term?
// describe("search", function(){
//   it("should give 200", function(done){
//     request(app)
//       .get('/search')
//       .expect(200)
//       .end(done);
//   });
// });

