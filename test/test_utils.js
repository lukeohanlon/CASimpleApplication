const assert = require('assert');
const express = require('express');
const app = express();
const indexRouter = require('../routes/index');

app.use('/', indexRouter);

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
        render: function(template, data) {
          assert.strictEqual(template, 'index');
          assert(Array.isArray(data.items), 'Response should contain an array of items');
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
        redirect: function(url) {
          assert.strictEqual(url, '/');
          resolve();
        }
      };

      app(req, res);
    });
  });
});
