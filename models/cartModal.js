const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true, // Make productId required
    },
    quantity: {
        type: Number,
        required: true,
        min: 1, // Ensure the quantity is always a positive number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    }
}, {
    timestamps: true, 
});


cartSchema.index({ userId: 1 });

const cartModel = mongoose.model('Cart', cartSchema);

module.exports = cartModel;
