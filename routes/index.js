var express = require('express');
var router = express.Router();

// List of items
var itemList = ['Coffee', 'Tea', 'Milk'];

// GET /
router.get('/', function(req, res) {
  res.render('index', { title: 'CA SimpleApp', items: itemList });
});

// POST /items
router.post('/', function(req, res) {
  var newItem = req.body.item;
  itemList.push(newItem);
  res.redirect('/');
});

module.exports = router;
