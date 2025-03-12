const cartModal = require('../models/cartModal');

const deleteCartProduct = async (req, res) => {
    try {
        const { cartid } = req.body;

        // Validate if cartid is provided
        if (!cartid) {
            return res.status(400).json({
                message: 'Cart ID is required',
                success: false,
                error: true,
                data: null,
            });
        }

        // Delete the cart product
        const deletedCartProduct = await cartModal.deleteOne({ _id: cartid });

        // If no document was deleted, return a 404 error
        if (deletedCartProduct.deletedCount === 0) {
            return res.status(404).json({
                message: 'Cart product not found',
                success: false,
                error: true,
                data: null,
            });
        }

        return res.status(200).json({
            message: 'Cart product deleted successfully',
            success: true,
            error: false,
            data: deletedCartProduct,
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

module.exports = deleteCartProduct;
