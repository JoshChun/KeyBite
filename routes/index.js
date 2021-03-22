var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'keyBite' });
});

router.get('/cases', function(req, res, next) {
  res.render('cases', { title: 'cases' });
});

module.exports = router;
