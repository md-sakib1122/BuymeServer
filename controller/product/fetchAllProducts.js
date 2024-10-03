const loggedinUserDetails = require('../../helpers/loggedinUserDetails'); 
const productModel = require('../..//models/productModel');
const fetchAllProducts = async (req, res) => {
    try{
      const user =await loggedinUserDetails(req.user.id);
      console.log(user);
      if(user.role === 'ADMIN'){
            const users = await  productModel.find({});
            res.json({
                message:"product fached successfully",
                error: false,
                success: true,
                data:users,
            });

      }else{
         throw new Error("user is not admin");
      }
    }
    catch(error){
        res.json({
            message: error.message,
            success: false,
            error: true,
            data: {}
        })
    }
} 


module.exports = fetchAllProducts;