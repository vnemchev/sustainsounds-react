const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: [true, 'Alias is required!'],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    bio: { type: String },
    genre: { type: String },
    imageUrl: { type: String },
    eventsCreated: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Event',
        },
    ],
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
