const cartModal = require('../models/cartModal');
const deleteCartProduct = async (req, res) => {
    try{
      const {cartid }= req.body;
      const DeletedcartProduct =  await cartModal.deleteOne({ _id: cartid });
      return res.json({
        message: 'Cart product deleted successfully',
        success: true,
        error: false,
        data: DeletedcartProduct,
      });
    }
    catch(error){
         res.json({
            message:error.message,
            success: false,
            error:true,
            data:null,
         })
    }
}

module.exports = deleteCartProduct;