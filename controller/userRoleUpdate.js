// first wee will check the user logged in or not and then user should be a admin 
const loggedinUserDetails = require('../helpers/loggedinUserDetails'); 
const userModel = require('../models/userModel');

async function userRoleUpdate(req ,res) {
    try{
         
         const loggedinUser = await loggedinUserDetails(req.user.id);
         const updatedUser = req.body;
         const loggedinUserRole = loggedinUser?.role;
         if(loggedinUserRole === 'ADMIN'){
            console.log(updatedUser);
            const userIdToUpdate =  updatedUser._id;
            const newRole = updatedUser.role;
            const updated = await userModel.findByIdAndUpdate(userIdToUpdate, { role: newRole }, { new: true });

            res.json({
                message: 'Role updated successfully',
                success: true,
                error: false,
                data: updated
             });
            
         }
         else{
            throw new Error('USER is not admin');
         }
         
    }
    catch(error){
        res.json({
            message:error.message,
            success:false,
            error:true,
            data:{}
        })
    }
}

module.exports = userRoleUpdate;