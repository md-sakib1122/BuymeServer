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
const fetchCategoryProducts = require('../controller/product/fetchCategoryProducts');
const fetchProductDetail = require('../controller/product/fetchProductDetails');
const addToCart = require('../controller/addToCart');
const cartProductCount = require('../controller/cartProductCount');
const fetchAllCartProducts = require('../controller/fetchAllCartProducts');
const deleteCartProduct = require('../controller/deleteCartProduct');
const updateAddToCart = require('../controller/updateAddToCart')
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
router.post('/category-products',fetchCategoryProducts);
router.post('/fetch-products',fetchProductDetail);
router.post('/addTo-cart',authToken, addToCart);
router.get('/cart-product-count',authToken,cartProductCount);
router.get('/all-cart-products',authToken,fetchAllCartProducts);
router.delete('/delete-cart',authToken,deleteCartProduct);
router.put('/update-cart-product',authToken,updateAddToCart)
module.exports = router;