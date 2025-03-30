const productModel = require('../../models/productModel');

const searchProducts = async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({
          message: "Search query is required",
          success: false,
          error: true,
          data: [],
        });
      }
  
      const products = await productModel.find({
        $or: [
          { category: { $regex: q, $options: "i" } }, // Case-insensitive search for name
          { productName: { $regex: q, $options: "i" } },
          { brandName: { $regex: q, $options: "i" } },
          { description: { $regex: q, $options: "i" } },
           // Case-insensitive search for category
        ],
      });
  
      res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        error: false,
        data: products,
      });
  
    } catch (err) {
      return res.status(500).json({
        message: err.message || "Internal server error",
        success: false,
        error: true,
        data: [],
      });
    }
  };
  



module.exports = searchProducts;