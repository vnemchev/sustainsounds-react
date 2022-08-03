const Artist = require('../models/users/Artist');
const Fan = require('../models/users/Fan');

exports.getOneFan = fanId => Fan.findById(fanId);

exports.getOneArtist = artistId => Artist.findById(artistId);

exports.getOneFanDetailed = fanId =>
    Fan.findById(fanId).populate('eventsAttended');

exports.getOneArtistDetailed = artistId =>
    Artist.findById(artistId)
        .populate('eventsAttended')
        .populate('eventsCreated');

exports.getAllArtists = () => Artist.find({});

exports.editArtist = async (existing, artist) => {
    existing.alias = artist.alias;
    existing.bio = artist.bio;
    existing.genre = artist.genre;
    existing.imageUrl = artist.imageUrl;

    await existing.save();

    return existing;
};

exports.attachCreatedEventToArtist = async (eventId, artistId) => {
    const artist = await Artist.findById(artistId);

    artist.eventsCreated.push(eventId);

    await artist.save();
};

exports.attachAttendedEvent = async (userId, eventId) => {
    const user =
        (await Artist.findById(userId)) || (await Fan.findById(userId));

    if (!user.eventsAttended.includes(eventId)) {
        user.eventsAttended.push(eventId);

        await user.save();
    } else {
        throw new Error('Can not attend same event twice!');
    }
};
