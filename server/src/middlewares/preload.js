module.exports = eventService => async (req, res, next) => {
    const eventId = req.params.eventId;

    const event = await eventService.getOne(eventId);
    if (event) {
        res.locals.event = event;
        next();
    } else {
        res.status(404).json({ message: `Event ${eventId} not found` });
    }
};
