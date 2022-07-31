const Artist = require('../models/users/Artist');
const Fan = require('../models/users/Fan');

exports.getOne = artistId => Artist.findById(artistId);

exports.getAll = () => Artist.find({});

exports.getOneFan = fanId => Fan.findById(fanId);

exports.editArtist = async (existing, artist) => {
    existing.alias = artist.alias;
    existing.genre = artist.genre;
    existing.bio = artist.bio;
    existing.imageUrl = artist.imageUrl;

    await existing.save();

    return existing;
};
