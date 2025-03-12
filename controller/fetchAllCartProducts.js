const cartModal = require('../models/cartModal');

const fetchAllCartProducts = async (req, res) => {
    const userId = req.user.id;

    try {
        // Fetch the cart products for the user and populate product details
        const cart = await cartModal.find({ userId }).populate("productId");

        // If no products are found in the cart
        if (!cart || cart.length === 0) {
            return res.status(404).json({
                message: "No products found in the cart",
                success: false,
                error: true,
                data: []
            });
        }

        // Successful response
        return res.status(200).json({
            message: "Cart fetched successfully",
            success: true,
            data: cart,
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            message: err.message || 'Internal server error',
            success: false,
            error: true,
            data: []
        });
    }
};

module.exports = fetchAllCartProducts;
