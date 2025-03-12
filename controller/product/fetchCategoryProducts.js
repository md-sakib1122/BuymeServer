const productModel = require('../../models/productModel');

const fetchCategoryProducts = async (req, res) => {
    try {
        const { category } = req.body;
        
        // Validate category
        if (!category) {
            return res.status(400).json({
                message: 'Category is required',
                error: true,
                success: false,
                data: {}
            });
        }

        const products = await productModel.find({ category });

        if (products.length === 0) {
            return res.status(404).json({
                message: 'No products found for this category',
                error: true,
                success: false,
                data: {}
            });
        }

        res.status(200).json({
            message: 'Products fetched successfully',
            error: false,
            success: true,
            data: products
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message || 'Internal server error',
            error: true,
            success: false,
            data: {}
        });
    }
};

module.exports = fetchCategoryProducts;
