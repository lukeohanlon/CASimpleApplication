var express = require('express');
var router = express.Router();

// List of items
var itemList = ['Coffee', 'Tea', 'Milk'];

// GET /items
router.get('/', function(req, res) {
  res.send(itemList);
});

// POST /items
router.post('/items', function(req, res) {
  var newItem = req.body.item;
  itemList.push(newItem);
  res.send('Item added successfully');
});

module.exports = router;
