const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: { type: String },
    description: { type: String },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'Artist',
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
