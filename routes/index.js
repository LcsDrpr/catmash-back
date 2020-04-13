var express = require('express');
var router = express.Router();

// var request = require('request');
const catModel = require('../models/cats');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Cats. */
router.get('/cats', function(req, res, next) {
  //res.send('Hello World!');

  catModel.find(function(error, data) {

    console.log('coucou les gens !');
    res.json({result: true, data});
  });

});



module.exports = router;
