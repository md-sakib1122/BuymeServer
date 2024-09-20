
const userLogout = async (req , res) => {
   try{
      res.clearCookie('auth_token')
      
      res.json({
        message: 'User logged out successfully',
        success: true,
        error: false,
        data:{}
      });
      
   }
   catch(error){
      res.json({
        message: error.message,
        success: false,
        error: true,
        data:{}
      })
   }
}

module.exports = userLogout;