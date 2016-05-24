'use strict';

var express = require('express');
var router = express.Router();

// router.use('/images', require('./images'));
router.use('/auctions', require('./auctions'));


// router.use('/S3', require('./S3'));

module.exports = router;
