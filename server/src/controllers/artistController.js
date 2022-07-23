const router = require('express').Router();
const artistService = require('../services/artistService');

// Get all artists
router.get('/', async (req, res) => {
    try {
        const result = await artistService.getAll();

        return res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: Error.message });
    }
});

// Get one artist
router.get('/:artistId', async (req, res) => {
    try {
        const result = await artistService.getOne(req.params.artistId);

        return res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: Error.message });
    }
});

module.exports = router;
