var expect = require("chai").expect;
var charcount = require("../charcount");
var request = require("supertest");
var server = require("../server.js");
it("Char Count Test", function (done) {
  var t = "hello world";
  var a = t.length;
  expect(charcount.counter(t)).to.equal(a);
  done();
});

it("null param test", function (done) {
  var t = "";
  expect(charcount.counter(t)).to.equal(0);
  done();
});

describe("Input is valid", function () {
  it("Status 200", function (done) {
    request(server).get("/?input=").expect(200, done);
  });
});

describe("Input is valid", function () {
  it("Status 200", function (done) {
    request(server).get("/?input=test").expect(200, done);
  });
});
describe("Wrong URL", function () {
  it("Status 404", function (done) {
    request(server).get("/fffss").expect(404, done);
  });
});
describe("Correct URL", function () {
  it("Status 200", function (done) {
    request(server).get("/?input=").expect(200, done);
  });
});
