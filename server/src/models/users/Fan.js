const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
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

const Fan = mongoose.model('Fan', fanSchema);

module.exports = Fan;
