const userModel = require('../models/userModel');

const userDetails = async (req, res) => {
    try {
        const userid = req.user?.id; // Check if req.user and req.user.id are present

        // Validate if user ID exists
        if (!userid) {
            return res.status(400).json({
                message: 'User not logged in or invalid user ID',
                success: false,
                error: true,
                data: {},
            });
        }

        const userDetails = await userModel.findOne({ _id: userid });

        if (userDetails) {
            return res.status(200).json({
                message: "User details fetched successfully",
                error: false,
                success: true,
                data: userDetails,
            });
        } else {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false,
                data: {},
            });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            message: err.message || 'Internal server error',
            success: false,
            error: true,
            data: {},
        });
    }
};

module.exports = userDetails;
