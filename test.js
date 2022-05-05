var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://0291-89-205-126-202.ngrok.io/' , function(error, response, body) {
        expect(body).to.equal('Hello World!!!');
        done();
    });
});
