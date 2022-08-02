const router = require('express').Router();
const { isAuth } = require('../middlewares/guards');
const userService = require('../services/userService');

// Get all artists
router.get('/artists', async (req, res) => {
    try {
        const result = await userService.getAllArtists();

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Get one artist
router.get('/artists/:artistId', async (req, res) => {
    try {
        const result = await userService.getOneArtist(req.params.artistId);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Edit artist info
router.put('/artists/:artistId', isAuth(), async (req, res) => {
    try {
        const artist = await userService.getOneArtist(req.params.artistId);

        const result = await userService.editArtist(artist, req.body);

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Get one fan
router.get('/fans/:fanId', async (req, res) => {
    try {
        const result = await userService.getOneFan(req.params.fanId);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Get one fan detailed
router.get('/fans/:fanId/detailed', async (req, res) => {
    try {
        const result = await userService.getOneFanDetailed(req.params.fanId);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Get one artist detailed
router.get('/artists/:artistId/detailed', async (req, res) => {
    try {
        const result = await userService.getOneArtistDetailed(
            req.params.artistId,
        );

        console.log(result);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/:userId/:eventId', isAuth(), async (req, res) => {
    try {
        const result = await userService.attachAttendedEvent(
            req.params.userId,
            req.params.eventId,
        );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;
