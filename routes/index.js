var express = require('express');
var router = express.Router();
const request = require('request');

var logger = require('../utils/logs');


/* GET home page. */
router.get('/', function(req, res, next) {
  logger.log('test1', 'i get this1', {cool: 'beans'});
  logger.warn('test2', 'i get this2', {cool: 'beans'});
  logger.error('test3', 'i get this3', {cool: 'beans'});
  res.render('index', { title: 'Express' });
});


module.exports = router;
