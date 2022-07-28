const router = require('express').Router();
const eventService = require('../services/eventService');
const { isAuth, isOwner } = require('../middlewares/guards');

// Get all events
router.get('/', async (req, res) => {
    try {
        const result = await eventService.getAll();

        return res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: Error.message });
    }
});

// Create new event
router.post('/', isAuth(), async (req, res) => {
    const { name, date, time, location, price, imageUrl, description } =
        req.body;
    try {
        const data = {
            name,
            date,
            time,
            location,
            price,
            imageUrl,
            description,
            _ownerId: req.user._id,
        };

        const result = await eventService.create(data);

        return res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: Error.message });
    }
});

// Get one event
router.get('/:eventId', async (req, res) => {
    try {
        const result = await eventService.getOne(req.params.eventId);

        return res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: Error.message });
    }
});

// Edit existing event
router.put('/:eventId', async (req, res) => {
    const { name, date, time, location, price, imageUrl, description } =
        req.body;
    try {
        const data = {
            name,
            date,
            time,
            location,
            price,
            imageUrl,
            description,
        };
        const result = await eventService.edit(req.params.eventId, data);

        return res.status(201).json(result);
    } catch (error) {
        res.status(404).json({ message: Error.message });
    }
});

// Delete existing event
router.delete('/:eventId', (req, res) => {
    res.send('Events');
});

module.exports = router;
