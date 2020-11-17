var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jsonwebtoken');
var userServ = require('../controller/user/userController');
const auth = passport.authenticate('jwt',{session:false});

/* GET users listing. */

router.post('/register',userServ.signUp);
router.get('/verifyAccount/:userId',userServ.verifyAccount);
router.post('/login',userServ.signIn);
router.put('/update_user_profile',auth,userServ.updateProfile);
router.post('/modify_password',auth,userServ.modifyPassword);
router.get('/getProfile',auth,userServ.getProfile);
router.put('/uploadeDp',auth,userServ.uploadeDp);

module.exports = router;



