const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
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
