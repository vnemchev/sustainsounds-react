const router = require('express').Router();

const eventService = require('../services/eventService');
const userService = require('../services/userService');

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');

// Get all events
router.get('/', async (req, res) => {
    try {
        const result = await eventService.getAll();

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: 'Bad request!' });
    }
});

// Get one event
router.get('/:eventId', preload(eventService), async (req, res) => {
    res.status(200).json(res.locals.event);
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

        await userService.attachEventToArtist(result._id, req.user._id);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: Error.message });
    }
});

// Edit existing event
router.put(
    '/:eventId',
    preload(eventService),
    isAuth(),
    isOwner(),
    async (req, res) => {
        try {
            const result = await eventService.edit(res.locals.event, req.body);

            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ message: 'Request error!' });
        }
    },
);

// Delete existing event
router.delete(
    '/:eventId',
    preload(eventService),
    isAuth(),
    isOwner(),
    async (req, res) => {
        try {
            const result = await eventService.remove(req.params.eventId);
            res.status(204).json(result);
        } catch (error) {
            res.status(404).json({
                message: `Event $${req.params.eventId} not found!`,
            });
        }
    },
);

module.exports = router;
