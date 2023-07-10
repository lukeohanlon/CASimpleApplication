const assert = require('assert');
const http = require('http');

describe('Test List', function() {
  it('should return a list of items', function(done) {
    const options = {
      hostname: '13.51.163.139',
      port: 3000,
      path: '/',
      method: 'GET'
    };

    const req = http.request(options, function(res) {
      let responseData = '';

      res.on('data', function(chunk) {
        responseData += chunk;
      });

      res.on('end', function() {
        // Check if the response contains the expected HTML elements
        assert(responseData.includes('<title>CA SimpleApp</title>'));
        assert(responseData.includes('<li>Coffee</li>'));
        assert(responseData.includes('<li>Tea</li>'));
        assert(responseData.includes('<li>Milk</li>'));
        done();
      });
    });

    req.end();
  });
});
