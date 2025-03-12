const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

const userSignup = async (req, res) => {
    try {
        let { email, password, name, proPic } = req.body;

        // Check if user already exists
        const user = await userModel.findOne({ email: email });
        if (user) {
            throw new Error("User Already Exists");
        }

        // Input validation
        if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            throw new Error("Please enter a valid email address");
        }
        if (!name) {
            throw new Error("Please enter a valid name");
        }
        if (!password || password.length < 6) {
            throw new Error("Please enter a valid password (at least 6 characters)");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        const userData = new userModel({
            email,
            password: hashedPassword,  // Store the hashed password
            name,
            proPic,
            role: 'GENERAL',  // Default user role
        });

        // Save user data to the database
        const saveUser = await userData.save();

        // Return success response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            error: false,
            data: saveUser
        });

    } catch (err) {
        // Log the error for debugging purposes
        console.error(err);

        // Return error response
        res.status(400).json({
            success: false,
            message: err.message,
            error: true,
            data: ""
        });
    }
};

module.exports = userSignup;
