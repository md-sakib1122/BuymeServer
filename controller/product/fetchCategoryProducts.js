const productModel = require('../../models/productModel');
const fetchCategoryProducts = async (req , res) => {
     try{
        const {category} = req.body;  
        const products = await productModel.find({ category });

        if (products.length === 0) {
          throw new Error('No products found for this category');
        }

        res.json({
            message:'Product fetched successfully',
            error:false,
            success:true,
            data:products 
        })
     }
     catch(err){
        res.json({
            message:err.message,
            error:true,
            success:false,
            data:{}
        })
     }
}

module.exports = fetchCategoryProducts;