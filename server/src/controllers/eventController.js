const router = require('express').Router();

// Get all events
router.get('/', (req, res) => {
    res.send('Events');
});

// Get one event
router.get('/:id', (req, res) => {
    res.send('Events');
});

// Create new event
router.post('/', (req, res) => {
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
