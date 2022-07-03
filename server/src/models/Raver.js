const mongoose = require('mongoose');

const raverSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageUrl: { type: String },
    eventsAttended: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Event',
        },
    ],
});

const Raver = mongoose.model('Raver', raverSchema);

module.exports = Raver;
