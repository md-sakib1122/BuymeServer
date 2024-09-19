const express = require('express');
const userSignup = require('../controller/userSignup');
const userLogin = require('../controller/userLogin');
const userDetails = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/user-details', authToken, userDetails);
module.exports = router;