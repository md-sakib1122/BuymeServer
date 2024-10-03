const express = require('express');
const userSignup = require('../controller/userSignup');
const userLogin = require('../controller/userLogin');
const userDetails = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const fetchAllusers = require('../controller/fetchAllUsers');
const userRoleUpdate = require('../controller/userRoleUpdate');
const uploadProduct = require('../controller/product/uploadProduct'); 
const fetchAllProducts = require('../controller/product/fetchAllProducts');
const updatedProduct = require('../controller/product/updateProduct');
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/user-details', authToken, userDetails);
router.get('/logout', userLogout);
router.get('/all-users',authToken,fetchAllusers);
router.post('/user-role-update',authToken,userRoleUpdate);
router.post('/upload-product', authToken,uploadProduct);
router.get('/all-product',authToken,fetchAllProducts);
router.put('/update-product',authToken,updatedProduct);

module.exports = router;