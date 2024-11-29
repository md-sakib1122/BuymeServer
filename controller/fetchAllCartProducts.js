const  cartModal = require('../models/cartModal');
const fetchAllCartProducts = async(req, res) =>{
    const userId = req.user.id;

    try {
      const cart = await cartModal.find({userId}).populate("productId");
      res.json({
        message: "Cart fetched successfully",
        success: true,
        data: cart,
      });
    }
    catch(err){
        res.json({
            message: err.message,
            success: false,
            error:true,

        })
    }
}

module.exports = fetchAllCartProducts;
