var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.Status.create({
    statusName: req.param('statusName')
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/view', function(req, res) {
  models.Status.findAll({
  }).then(function(status) {
   res.json(status);
  });
});

module.exports = router;
