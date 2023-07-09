const assert = require('assert');
const app = require('./app');

describe('Test Express App', function() {
  it('should return a list of items', function() {
    return new Promise((resolve, reject) => {
      const req = {
        method: 'GET',
        url: '/'
      };
      const res = {
        status: function(code) {
          assert.strictEqual(code, 200);
          return this;
        },
        send: function(data) {
          assert(Array.isArray(data), 'Response should be an array');
          resolve();
        }
      };

      app(req, res);
    });
  });

  it('should add a new item to the list', function() {
    return new Promise((resolve, reject) => {
      const req = {
        method: 'POST',
        url: '/items',
        body: { item: 'New Item' }
      };
      const res = {
        status: function(code) {
          assert.strictEqual(code, 302);
          return this;
        },
        send: function(data) {
          resolve();
        }
      };

      app(req, res);
    });
  });
});
