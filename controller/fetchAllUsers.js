const userModel = require('../models/userModel');

const fetchAllusers = async (req, res) => {
    try {
        const userid = req.user?.id; // Ensure req.user is available and contains id

        if (!userid) {
            return res.status(400).json({
                message: 'User not logged in',
                success: false,
                error: true,
                data: [],
            });
        }

        const userDetails = await userModel.findOne({ _id: userid });

        if (!userDetails) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
                error: true,
                data: [],
            });
        }

        if (userDetails.role === 'ADMIN') {
            const allUsers = await userModel.find({});

            if (allUsers.length > 0) {
                return res.status(200).json({
                    message: 'All users fetched successfully',
                    success: true,
                    error: false,
                    data: allUsers,
                });
            } else {
                return res.status(404).json({
                    message: 'No users found',
                    success: false,
                    error: true,
                    data: [],
                });
            }
        } else {
            return res.status(403).json({
                message: 'You are not authorized to access this resource',
                success: false,
                error: true,
                data: [],
            });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            message: err.message || 'Internal server error',
            success: false,
            error: true,
            data: [],
        });
    }
};

module.exports = fetchAllusers;
