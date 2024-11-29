const cartModal = require('../models/cartModal');
const cartProductCount = async (req, res) => {
   try{
      const userid = req.user.id;
      const count = await cartModal.countDocuments({
         userId: userid,
      })

      return res.json({
         data: {count: count},
         success: true,
         error: false,
      })

   }
   catch(err){
     res.json({
        message: err.message,
        success: false,
        error: true,
        data: {}
     })
   }
}


module.exports = cartProductCount;