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
    // console.log(status);
   res.json(status);
  });
});

// router.get('/:user_id/destroy', function(req, res) {
//   models.User.destroy({
//     where: {
//       id: req.param('user_id')
//     }
//   }).then(function() {
//     res.redirect('/');
//   });
// });

// router.post('/:user_id/tasks/create', function (req, res) {
//   models.Task.create({
//     title: req.param('title'),
//     UserId: req.param('user_id')
//   }).then(function() {
//     res.redirect('/');
//   });
// });

// router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
//   models.Task.destroy({
//     where: {
//       id: req.param('task_id')
//     }
//   }).then(function() {
//     res.redirect('/');
//   });
// });


module.exports = router;
