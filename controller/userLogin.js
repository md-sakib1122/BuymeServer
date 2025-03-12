const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
    try {
        // Validate request body
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist",
                success: false,
                error: true,
                data: {},
            });
        }

        // Compare password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({
                message: "Wrong password",
                success: false,
                error: true,
                data: {},
            });
        }

        // Generate JWT token
        const data = {
            id: user._id,
            email: user.email,
        };
        
        const token = jwt.sign({ data }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });

        // Set the token in a secure cookie
        res.cookie('auth_token', token, {
            httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
            secure: process.env.NODE_ENV === 'production', // Ensurecookie is secure in production environment
            sameSite: 'None',
            maxAge: 3600000, // Cookie expiration (1 hour)
        }).json({
            message: "Login successful",
            success: true,
            error: false,
            data: {},
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            message: err.message || "Internal server error",
            success: false,
            error: true,
            data: {},
        });
    }
};

module.exports = userLogin;
