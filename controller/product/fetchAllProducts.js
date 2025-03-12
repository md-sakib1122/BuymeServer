const loggedinUserDetails = require('../../helpers/loggedinUserDetails'); 
const productModel = require('../../models/productModel');

const fetchAllProducts = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
                error: true,
                data: {}
            });
        }

        const user = await loggedinUserDetails(req.user.id);
        console.log(user);

        if (user.role === 'ADMIN') {
            const products = await productModel.find({});
            return res.json({
                message: "Products fetched successfully",
                error: false,
                success: true,
                data: products
            });
        } else {
            return res.status(403).json({
                message: "User is not an admin",
                success: false,
                error: true,
                data: {}
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message || "Internal server error",
            success: false,
            error: true,
            data: {}
        });
    }
};

module.exports = fetchAllProducts;
