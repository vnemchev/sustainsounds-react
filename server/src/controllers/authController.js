const router = require('express').Router();
const { Error } = require('mongoose');
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('register');
});

// Register
router.post('/register', async (req, res) => {
    const { email, password, repeatPassword, alias } = req.body;
    try {
        if (password != repeatPassword) {
            throw {
                message: 'Passwords must match!',
            };
        }
        const result = await authService.register(email, password, alias);

        return res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: Error.message });
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authService.login(email, password);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    res.send('Events');
});

// Logout
router.put('/logout', (req, res) => {
    res.send('Events');
});

module.exports = router;
