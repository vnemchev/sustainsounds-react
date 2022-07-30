const { validateToken } = require('../services/authService');

module.exports = () => (req, res, next) => {
    const sessionToken = req.headers['X-Authorization'];
    if (sessionToken) {
        try {
            const payload = validateToken(sessionToken);

            req.user = {
                email: payload.email,
                _id: payload._id,
                username: payload.username,
                accessToken,
            };

            if (payload.alias) {
                req.user.alias = payload.alias;
            }
        } catch (err) {
            console.error(err);
            return res
                .status(401)
                .json({ message: 'Invalid access token. Please log in' });
        }
    }

    next();
};
