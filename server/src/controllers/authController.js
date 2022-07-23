const router = require('express').Router();
const { Error } = require('mongoose');
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
        res.status(400).json({ message: Error.message });
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
        res.status(400).json({ message: Error.message });
    }
});

module.exports = router;
