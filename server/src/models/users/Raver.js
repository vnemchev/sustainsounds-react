const mongoose = require('mongoose');

const raverSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    eventsAttended: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Event',
        },
    ],
});

const Raver = mongoose.model('Raver', raverSchema);

module.exports = Raver;
