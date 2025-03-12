const loggedinUserDetails = require('../helpers/loggedinUserDetails');
const userModel = require('../models/userModel');

async function userRoleUpdate(req, res) {
    try {
        // Get logged-in user details
        const loggedinUser = await loggedinUserDetails(req.user.id);
        const updatedUser = req.body;
        const loggedinUserRole = loggedinUser?.role;

        // Check if the logged-in user is an admin
        if (loggedinUserRole !== 'ADMIN') {
            return res.status(403).json({
                message: 'You are not authorized to perform this action',
                success: false,
                error: true,
                data: {}
            });
        }

        // Check if the new role is valid (optional, depending on your app's role structure)
        const validRoles = ['ADMIN', 'USER', 'MODERATOR']; // Adjust this list as necessary
        if (!validRoles.includes(updatedUser.role)) {
            return res.status(400).json({
                message: 'Invalid role provided',
                success: false,
                error: true,
                data: {}
            });
        }

        // Update the user role
        const userIdToUpdate = updatedUser._id;
        const newRole = updatedUser.role;
        const updated = await userModel.findByIdAndUpdate(userIdToUpdate, { role: newRole }, { new: true });

        if (!updated) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
                error: true,
                data: {}
            });
        }

        // Return success response
        return res.status(200).json({
            message: 'Role updated successfully',
            success: true,
            error: false,
            data: updated
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({
            message: error.message || 'Internal server error',
            success: false,
            error: true,
            data: {}
        });
    }
}

module.exports = userRoleUpdate;
