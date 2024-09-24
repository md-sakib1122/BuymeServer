const userModel = require('../models/userModel');

const userDetails = async (req, res)=> {
    try {
       const userid = req.user.id;
     

       const userDetails = await userModel.findOne({_id: userid});
       if(userDetails){
        res.json({
            message: "User details fetched successfully",
            error: false,
            success : true,
            data: userDetails
        })
    }
    else{
        throw new Error('cant fetch user details')
    }
       
    }catch(err){
        res.json({
            message: err.message,
            error: true,
            success : false,
            data:{}
        })
    }
}


module.exports = userDetails;