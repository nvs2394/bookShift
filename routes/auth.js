var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

//SignUp
router.post('/signup',authController.signup)

//LogIn

router.post('/login',authController.login);

//Logout
router.post('/logout',authController.logout);

module.exports = router;