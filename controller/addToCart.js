const cartModel = require('../models/cartModal');

const addToCart = async (req, res) => {
    try {
        // Extract the product ID from the request body
        const { productId } = req.body;
        const userid = req.user.id;

        // Validate productId
        if (!productId) {
            return res.status(400).json({
                message: 'Product ID is required',
                success: false,
                error: true,
                data: {}
            });
        }

        const payload = {
            userId: userid,
            productId: productId,
            quantity: 1,
        };

        // Check if the product already exists in the cart
        const alreadyExists = await cartModel.findOne({ productId, userId: userid });

        if (alreadyExists) {
            return res.status(409).json({
                message: 'Product already exists in the cart',
                success: false,
                error: true,
                data: alreadyExists,
            });
        }

        // If the product does not exist in the cart, create a new entry
        const newCartItem = new cartModel(payload);
        await newCartItem.save();

        res.status(201).json({
            message: 'Product added to cart successfully',
            success: true,
            error: false,
            data: newCartItem,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Internal server error',
            success: false,
            error: true,
            data: {},
        });
    }
};

module.exports = addToCart;
