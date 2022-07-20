const router = require('express').Router();
const eventService = require('../services/eventService');

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

// Get all events
router.get('/', (req, res) => {
    res.send('Events');
});

// Get one event
router.get('/:id', (req, res) => {
    res.send('Events');
});

// Edit existing event
router.put('/:id', (req, res) => {
    res.send('Events');
});

// Delete existing event
router.delete('/:id', (req, res) => {
    res.send('Events');
});

module.exports = router;
