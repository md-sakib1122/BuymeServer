const userModel = require ('../models/userModel');
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
   try{

       // Validate request body
       const { email, password } = req.body;
       const user = await userModel.findOne({ email: email});
       if(user){
         
        const match = await bcrypt.compare(password, user.password);
        if(match) console.log("password matched",match);
        else console.log("not matched");
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