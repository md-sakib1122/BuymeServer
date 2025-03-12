const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
    try {
        const token = req.cookies.auth_token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'User not logged in',
                error: true,
                data: {
                    user: 'notloggedin'
                }
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        req.user = decoded.data;
        next(); // Call next() only if token is valid

    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token has expired, please login again',
                error: true,
                data: {}
            });
        }

        return res.status(401).json({
            success: false,
            message: 'Invalid token',
            error: true,
            data: {}
        });
    }
};

module.exports = authToken;
