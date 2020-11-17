var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jsonwebtoken');
var user = require('./users');
const auth = passport.authenticate('jwt',{session:false});

router.use('/user',user);

module.exports = router;



