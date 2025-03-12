const productModel = require('../../models/productModel');

const fetchProductDetails = async (req, res) => {
    try {
        const { productId } = req.body;

        // Validate productId
        if (!productId) {
            return res.status(400).json({
                message: 'Product ID is required',
                success: false,
                error: true,
                data: {}
            });
        }

        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: `Product ${productId} not found`,
                success: false,
                error: true,
                data: {}
            });
        }

        return res.status(200).json({
            message: 'Product fetched successfully',
            success: true,
            error: false,
            data: product
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: err.message || 'Internal server error',
            success: false,
            error: true,
            data: {}
        });
    }
};

module.exports = fetchProductDetails;
