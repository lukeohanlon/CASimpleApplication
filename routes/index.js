const express = require('express');
const router = express.Router();

// List of items
const itemList = ['Coffee', 'Tea', 'Milk'];

// GET /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CA SimpleApp', items: itemList });
});

// POST /items
router.post('/items', function(req, res, next) {
  const newItem = req.body.item;
  itemList.push(newItem);
  res.redirect('/');
});

module.exports = router;
