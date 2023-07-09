var express = require('express');
var router = express.Router();

// List of items
var itemList = ['Coffee', 'Tea', 'Milk'];

// GET /users
router.get('/', function(req, res) {
  res.send(itemList);
});

// POST /users
router.post('/', function(req, res) {
  var newItem = req.body.item;
  itemList.push(newItem);
  res.send('Item added successfully');
});

module.exports = router;

