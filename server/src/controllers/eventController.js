const router = require('express').Router();
const eventService = require('../services/eventService');
const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');

// Get all events
router.get('/', async (req, res) => {
    try {
        const result = await eventService.getAll();

        return res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: 'Bad request!' });
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
            // _ownerId: req.user._id,
        };

        const result = await eventService.create(data);

        return res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: Error.message });
    }
});

// Get one event
router.get('/:eventId', preload(eventService), async (req, res) => {
    res.json(res.locals.event);
});

// Edit existing event
router.put('/:eventId', preload(eventService), isOwner(), async (req, res) => {
    try {
        console.log(res.locals.event);
        const result = await eventService.edit(res.locals.event, req.body);

        return res.json(result);
    } catch (error) {
        res.status(400).json({ message: 'Request error!' });
    }
});

// Delete existing event
router.delete('/:eventId', isAuth(), isOwner(), async (req, res) => {
    try {
        const result = await eventService.remove(req.params.eventId);
        res.json(result);
    } catch (error) {
        res.status(404).json({
            message: `Event $${req.params.eventId} not found!`,
        });
    }
});

module.exports = router;
