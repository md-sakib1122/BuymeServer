const cartModal = require('../models/cartModal');

const updateAddToCart = async (req, res) => {
    try {
        const { cartid, quantity } = req.body;
        
        // Validate if cartid is provided
        if (!cartid) {
            return res.status(400).json({
                message: 'Cart ID is required',
                success: false,
                error: true,
                data: null,
            });
        }

        // Update the cart product quantity
        const updatedProduct = await cartModal.updateOne(
            { _id: cartid }, 
            { $set: { quantity: quantity } }
        );

        return res.status(200).json({
            message: 'Cart product count updated successfully',
            success: true,
            error: false,
            data: updatedProduct,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message || 'Internal server error',
            success: false,
            error: true,
            data: null,
        });
    }
};

module.exports = updateAddToCart;

