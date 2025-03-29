const cartModal = require('../models/cartModal');

const cartProductCount = async (req, res) => {
    try {
        const userid = req.user.id;

        // Get the count of documents for the user
        const count = await cartModal.countDocuments({ userId: userid });
        return res.status(200).json({
            data: { count },
            success: true,
            error: false,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: err.message || 'Internal server error',
            success: false,
            error: true,
            data: {},
        });
    }
};

module.exports = cartProductCount;
