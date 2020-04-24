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



// route qui permet de mettre a jour les infos d'un chat
router.put('/cats/:cat_id/updateCat', function (req, res, next) {

  console.log('REQ du body (step 1) ', req.body);

  catModel.findById(req.body.id, (error, cats) => {
    if (error) {
      console.log('ERRORS DE FIND DE CAT : ',errors);
      res.json({ result: false, errors });
    } else {

      cats.score = req.body.score;

      cats.save((err, cats) => {
          catModel.find(function(error, data) {
            res.json({result: true, data});
          });
      });
    }
  });




});



module.exports = router;
