var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
require('models/Cocktail');
const Cocktail = mongoose.model('cocktails');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const filter = {};
  const cocktails = await Cocktail.find(filter);
  console.log(cocktails)
  res.render('index', { title: 'Cocktail Bar', cocktails:cocktails });
});


module.exports = router;