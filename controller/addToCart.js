const cartModel = require('../models/cartModal');

const addToCart = async (req, res) => {
   try{
     // Extract the product ID from the request body
     const productId = req.body.productId;
     const userid = req.user.id;
     const payload = {
        userId: userid,
        productId: productId,
        quantity: 1,
     }
     const alreadyExists = await cartModel.findOne({ productId });
     if(!alreadyExists){
        // If the product does not exist in the cart, create a new entry
        const newCartItem = new cartModel(payload);
        await newCartItem.save();

        res.json({
            message:'Product added to cart successfully',
            success:true,
            error:false,
            data: {}
         });
    
     }
     else{  
        throw new Error('product already Exists!');
     }
    

   }
   catch(error){
      res.json({
         message:error.message,
         success:false,
         error:true,
         data:{}
      });
   }
}

module.exports = addToCart;