const mongoose = require('mongoose');

const cartSechema =new mongoose.Schema({
     productId: String,
     quantity: Number,
     userId : String,
},{
    timestamps: true,
});

const cartModel = mongoose.model('cart',cartSechema);

module.exports = cartModel;
