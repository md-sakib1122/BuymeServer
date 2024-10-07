const productModel = require('../../models/productModel');

const fetchProductDetails = async (req, res) => {
   try{
       const {productId} = req.body;
       const product = await productModel.findById(productId);
       if(!product){
        throw new Error(`Product ${productId} not found`);
       }
       return res.json({
         message: 'Product fetched successfully',
         success: true,
         error: false,
         data: product
       });
   }
   catch(err){
     return res.json({
        message:err.message,
        success: false,
        error: true,
        data:{}
     })
   }
}


module.exports = fetchProductDetails;