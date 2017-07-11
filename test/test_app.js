const assert = require("assert")
const request = require("supertest")
const app = require("../app")

describe("GET /api/customer/items", function () {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/customer/items")
      .expect(200)
      .end(done);
  })
  // it("should check for returned items", function(done){
  //  request(app)
  //    .get("/api/customer/items")
  //    .end(done);
  // })

});

describe("GET /api/vendor/purchase", function () {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/vendor/purchase")
      .expect(200)
      .end(done);
  })

});
