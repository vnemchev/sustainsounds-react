const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Event name is required!'],
    },
    date: {
        type: String,
        required: [true, 'Event date is required!'],
    },
    time: {
        type: String,
        required: [true, 'Event time is required!'],
    },
    location: {
        type: String,
        required: [true, 'Event location is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Event price is required!'],
    },
    imageUrl: { type: String },
    description: { type: String },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Artist',
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
