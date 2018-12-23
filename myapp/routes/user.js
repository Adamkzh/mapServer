var express = require('express');
var router = express.Router();
let metadata = require('../data/realdata')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(metadata.getUser());
});

module.exports = router;
