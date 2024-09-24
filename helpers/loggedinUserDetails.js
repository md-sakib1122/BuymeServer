const userModel = require('../models/userModel');

async function loggedinUserDetails(userid) {
 
    const userDetails = await userModel.findOne({_id: userid});

    if (!userDetails) {
        return false
    }
    else{
        return userDetails;
    }

}

module.exports = loggedinUserDetails;