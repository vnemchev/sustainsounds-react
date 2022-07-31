const router = require('express').Router();
const artistService = require('../services/artistService');

// Get all artists
router.get('/', async (req, res) => {
    try {
        const result = await artistService.getAll();

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Get one artist
router.get('/:artistId', async (req, res) => {
    try {
        const result = await artistService.getOne(req.params.artistId);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Edit artist info
router.put('/:artistId', async (req, res) => {
    try {
        const artist = await artistService.getOne(req.params.artistId);

        const result = await artistService(artist, req.body);

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
