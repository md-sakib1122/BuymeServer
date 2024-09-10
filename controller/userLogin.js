const userModel = require ('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userLogin = async (req, res) => {
   try{

       // Validate request body
       const { email, password } = req.body;
       const user = await userModel.findOne({ email: email});
       if(user){
         
        const match = await bcrypt.compare(password, user.password);

        if(match){
         const data = {
           id: user._id,
           email:user.email
         }
         const token = jwt.sign({
            data:data,
          }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });

          res.cookie('auth_token', token, {
            httpOnly: true,    // Prevents client-side JavaScript from accessing the cookie
            secure: true,      // Ensures the cookie is sent over HTTPS
            maxAge: 3600000,   // Cookie expiration (1 hour)
          }).json({
             message: "login success",
             error:false,
             success: true,
             body:{}
          });

        }
        else throw new Error("Wrong password..");
       }
       else{
         throw new Error("User Dosent exist..");
       }

   }
   catch(err){
     res.status(500).json({
         message: err.message,
         success : false ,
         error :true,
         data :{}
         });
   }
}

module.exports = userLogin ;