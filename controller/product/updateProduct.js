const productModel = require('../../models/productModel');
const loggedinUserDetails = require('../../helpers/loggedinUserDetails');

async function updateProduct(req, res) {
    try {
        const updatedProduct = req.body;
        
        // Validate _id and ensure it's provided in the request
        if (!updatedProduct._id) {
            return res.status(400).json({
                message: 'Product ID is required',
                success: false,
                error: true,
                data: []
            });
        }

        const loggedinUser = await loggedinUserDetails(req.user.id);
        const loggedinUserRole = loggedinUser?.role;

        if (loggedinUserRole !== 'ADMIN') {
            return res.status(403).json({
                message: 'User is not an admin',
                success: false,
                error: true,
                data: []
            });
        }

        // Perform product update
        const product = await productModel.findByIdAndUpdate(updatedProduct._id, updatedProduct, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
                error: true,
                data: []
            });
        }

        res.status(200).json({
            message: 'Product updated successfully',
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
            data: []
        });
    }
}

module.exports = updateProduct;
