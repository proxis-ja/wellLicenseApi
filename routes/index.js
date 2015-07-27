var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.json({
    title: 'Well License API'
  });
});

module.exports = router;
