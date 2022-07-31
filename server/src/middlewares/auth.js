const { validateToken } = require('../services/authService');

module.exports = () => (req, res, next) => {
    const accessToken = req.headers['x-authorization'];
    if (accessToken) {
        try {
            const payload = validateToken(accessToken);

            req.user = {
                email: payload.email,
                _id: payload._id,
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
