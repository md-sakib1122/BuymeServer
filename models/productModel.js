const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    default: [],
  },
  sellingPrice: {
    type: Number, // Changed to Number for price representation
    required: true,
  },
  buyingPrice: {
    type: Number, // Changed to Number for price representation
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
