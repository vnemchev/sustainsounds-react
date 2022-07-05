const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('choice');
});

router.get('/register/artist', (req, res) => {
    res.render('registerArtist');
});

router.get('/register/raver', (req, res) => {
    res.render('registerRaver');
});

// Register as artist
router.post('/register/artist', async (req, res) => {
    const { email, password, repeatPassword, ...rest } = req.body;
    try {
        if (password != repeatPassword) {
            throw {
                message: 'Passwords must match!',
            };
        }
        const result = await authService.registerArtist(email, password, rest);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }

    res.send('Events');
});

// Register as raver
router.post('/register/raver', async (req, res) => {
    const { email, password, repeatPassword } = req.body;
    try {
        if (password != repeatPassword) {
            throw {
                message: 'Passwords must match!',
            };
        }
        const result = await authService.registerRaver(email, password);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
    
});

// Login
router.post('/login', (req, res) => {
    const {email, password} = req.body;

    try {
        
    } catch (error) {
        
    }
    res.send('Events');
});

// Logout
router.put('/logout', (req, res) => {
    res.send('Events');
});

module.exports = router;
