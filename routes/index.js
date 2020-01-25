var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var model = {
title: 'azure',
message: process.env.MESSAGE || "This is Development"
  };
 
  res.render('index', { title: 'Express' });
});

module.exports = router;
