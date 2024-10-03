const productModel = require('../../models/productModel') // Adjust the path accordingly
const loggedinUserDetails = require('../../helpers/loggedinUserDetails'); 

async function updateProduct(req, res) {

    try{
       const updatedProduct = req.body;
      
       const loggedinUser = await loggedinUserDetails(req.user.id);
       const loggedinUserRole = loggedinUser?.role;
       console.log("updatedProduct",updatedProduct);
       if(loggedinUserRole === 'ADMIN'){

            const product = await productModel.findByIdAndUpdate(updatedProduct._id, updatedProduct, {
                new: true,
                runValidators: true, 
            });

            res.json({
                message: 'Product updated successfully',
                success: true,
                error: false,
                data: product
            })
       

      }
      else{
         throw new Error('user is not admin');
      }

    }
    catch(err){
        res.json({
            message:err.message,
            success:false,
            error:true,
            data:[]
        })
    }
}

module.exports = updateProduct;