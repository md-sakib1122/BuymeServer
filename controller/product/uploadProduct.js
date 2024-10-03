const productModel = require('../../models/productModel') // Adjust the path accordingly
const loggedinUserDetails = require('../../helpers/loggedinUserDetails'); 

// Create a new product
const uploadProduct = async (req, res) => {
    try {
        
        const loggedinUser = await loggedinUserDetails(req.user.id);
        const loggedinUserRole = loggedinUser?.role;
        if(loggedinUserRole === 'ADMIN'){

            const {buyingPrice, productName, brandName, category, images, sellingPrice, description } = req.body;
            // Create a new product instance
            const newProduct = new productModel({
                productName,
                brandName,
                category,
                images,
                sellingPrice,
                description,
                buyingPrice
            });

            // Save the product to the database
            await newProduct.save();

            // Send a success response
            res.status(201).json({
                success: true,
                message: 'Product created successfully',
                error: false,
                data: newProduct,
            });
        }
        else{
            throw new Error('Product creation failed');
        }
    }
    catch (error) {
            res.status(500).json({
            success: false,
            error: true ,
            message: error.message,
        });
    }
};

module.exports =  uploadProduct ;
