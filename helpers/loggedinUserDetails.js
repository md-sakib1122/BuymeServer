const userModel = require('../models/userModel');

async function loggedinUserDetails(userid) {
    try {
        // Fetch user details excluding sensitive information (e.g., password)
        const userDetails = await userModel.findOne({ _id: userid }).select('-password');

        if (!userDetails) {
            throw new Error('User not found');  // Throw an error if the user doesn't exist
        }

        return userDetails;
    } catch (error) {
        console.error(error);  // Log the error for debugging purposes
        throw new Error('Error fetching user details');
    }
}

module.exports = loggedinUserDetails;
