var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.Type.create({
    typeName: req.param('typeName'),
    typeCode: req.param('typeCode')
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/view', function(req, res) {
  models.Type.findAll({
  }).then(function(types) {
   res.json(types);
  });
});

module.exports = router;
