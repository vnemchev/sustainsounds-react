const router = require('express').Router();
const eventService = require('../services/eventService');

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
router.post('/', async (req, res) => {
    const { name, date, time, location, price, imageUrl, description } = req.body;
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

        const result = await eventService.create(data);

        return res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: Error.message });
    }
});

// Get one event
router.get('/:eventId', (req, res) => {
    res.send('Events');
});

// Edit existing event
router.put('/:eventId', (req, res) => {
    res.send('Events');
});

// Delete existing event
router.delete('/:eventId', (req, res) => {
    res.send('Events');
});

module.exports = router;
