var expect  = require('chai').expect;
var request = require('request');
var base_url = "http://localhost:8000/"

describe("Hello World Server", function(done) {
  describe("GET /", function() {
    it("Main page content", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe('Hello Guys!!');
      });
    });
  });
});
