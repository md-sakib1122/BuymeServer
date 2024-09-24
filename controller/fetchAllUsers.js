//first check user loged in or not if logedin then we have that logged in users id , By using that loggedin user id 
// we will chek that logged in user is admin or not if admin then only we fetch all users data otherwise we throw an error
const userModel = require('../models/userModel');
const fetchAllusers = async (req,res) => {
    try{
        const userid = req.user.id;
        const userDetails = await userModel.findOne({_id: userid});
        if(userDetails.role === 'ADMIN'){
          
            const allUsers = await userModel.find({});
            if(allUsers.length > 0){
                return res.json({
                    message: 'All users fetched successfully',
                    success: true,
                    error:false,
                    data: allUsers,
                })
            } 
            else{
                throw new Error('Failed to fetch all users');
            }

        }else{
           throw new Error('You are not authorized to access this resource');
        }
    }catch(err){
        res.json({
             message: err.message,
             success: false,
             error:true,
             data:[],
        })
    }
}

module.exports = fetchAllusers;