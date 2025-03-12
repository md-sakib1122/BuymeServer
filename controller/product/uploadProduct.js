const productModel = require('../../models/productModel');
const loggedinUserDetails = require('../../helpers/loggedinUserDetails');

// Create a new product
const uploadProduct = async (req, res) => {
    try {
        const loggedinUser = await loggedinUserDetails(req.user.id);
        const loggedinUserRole = loggedinUser?.role;

        if (loggedinUserRole !== 'ADMIN') {
            return res.status(403).json({
                success: false,
                message: 'You do not have permission to create a product',
                error: true,
                data: {}
            });
        }

        const { buyingPrice, productName, brandName, category, images, sellingPrice, description } = req.body;

        // Validate required fields
        if (!productName || !category || !sellingPrice || !description) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields',
                error: true,
                data: {}
            });
        }

        // Create a new product instance
        const newProduct = new productModel({
            productName,
            brandName,
            category,
            images,
            sellingPrice,
            description,
            buyingPrice
        });

        // Save the product to the database
        await newProduct.save();

        // Send a success response
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            error: false,
            data: newProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: true,
            message: error.message || 'Internal server error',
            data: {}
        });
    }
};

module.exports = uploadProduct;
