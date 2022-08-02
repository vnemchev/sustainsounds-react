const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    alias: {
        type: String,
        required: [true, 'Alias is required!'],
    },
    genre: { type: String },
    bio: { type: String },
    imageUrl: { type: String },
    eventsAttended: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Event',
        },
    ],
    eventsCreated: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Event',
        },
    ],
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
