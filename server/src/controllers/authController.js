const router = require('express').Router();
const authService = require('../services/authService');

// Register
router.post('/register', async (req, res) => {
    const { email, password, repeatPassword, alias } = req.body;

    if (password != repeatPassword) {
        throw {
            message: 'Passwords must match!',
        };
    }

    try {
        const data = { email, password, alias };

        const result = await authService.register(data);

        return res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const data = { email, password };

        const result = await authService.login(data);

        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Logout
router.get('/logout', (req, res) => {
    authService.logout(req.headers['x-authorization']);
    res.status(204).end();
});
module.exports = router;
