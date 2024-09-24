const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
    try {
        const token = req.cookies.auth_token;

        if (!token) {
            return res.json({
                success: false,
                message: 'User not logged in',
                error: true,
                data: {}
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        req.user = decoded.data;
        next(); // Call next() only if token is valid
    } catch (err) {
        return res.json({
            success: false,
            message: err.message,
            error: true,
            data: {}
        });
    }
};

module.exports = authToken;
