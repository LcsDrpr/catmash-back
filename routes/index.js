var express = require('express');
var router = express.Router();

const catModel = require('../models/cats');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Cats. */
router.get('/cats', function(req, res, next) {

  catModel.find(function(error, data) {

    res.json({result: true, data});
  });

});



// route qui permet de mettre a jour les infos d'un chat
router.put('/cats/cat', function (req, res, next) {

  console.log('REQ PARAMS : ',req.body.id);
  console.log('REQ BODY : ', req.body);


  catModel.findById(req.body.id, (error, cats) => {
    
    if (error) {
      console.log('ERRORS DE FIND DE CAT : ',errors);
      res.json({ result: false, errors });
    } else {
      //console.log(cats);

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
