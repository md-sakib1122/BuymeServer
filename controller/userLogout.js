const userLogout = async (req, res) => {
   try {
       // Clear the authentication token cookie
       res.clearCookie('auth_token', { 
           httpOnly: true, 
           secure: process.env.NODE_ENV === 'production', // Cookie security in production
       });

       // Send success response
       res.status(200).json({
           message: 'User logged out successfully',
           success: true,
           error: false,
           data: {},
       });

   } catch (error) {
       console.error(error); // Log the error for debugging
       res.status(500).json({
           message: error.message || 'Internal server error',
           success: false,
           error: true,
           data: {},
       });
   }
};

module.exports = userLogout;
