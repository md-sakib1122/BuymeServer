const express = require('express');
const userSignup = require('../controller/userSignup');
const userLogin = require('../controller/userLogin');
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
module.exports = router;