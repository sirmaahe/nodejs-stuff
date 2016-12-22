var express = require('express');
var router = express.Router();
var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'projects.db',
        autoload: true
    });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Мои проекты' });
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/projects', function(req, res, next) {
  db.find({}).exec(function(err, data) {
    if (err) res.send(err);
    res.json(data)
  });
});

module.exports = router;
