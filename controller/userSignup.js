const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

const userSignup = async (req, res) => {
    try {
        let { email, password, name,proPic } = req.body;
        
        const user = await userModel.findOne({ email: email});
          console.log(req.body);
        if(user) {
          throw new Error("User Already Exists");
        }

        // Input validations
        if (!email) {
            throw new Error("Please enter a valid email");
        }
        if (!name) {
            throw new Error("Please enter a valid name");
        }
        if (!password) {
            throw new Error("Please enter a valid password");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // bcrypt.hash() returns a Promise

        // Create user data
        const userData = new userModel({
            email,
            password: hashedPassword,  // Use hashed password
            name,
            proPic,
            role: 'GENERAL', // default user role
        });

        // Save user data
        const saveUser = await userData.save();

        // Return success response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            error: false,
            data: saveUser
        });

    } catch (err) {
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
