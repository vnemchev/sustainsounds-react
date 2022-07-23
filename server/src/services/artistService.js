const Artist = require('../models/users/Artist');
const Fan = require('../models/users/Fan');

exports.getOne = artistId => Artist.findById(artistId);

exports.getAll = () => Artist.find({});

exports.getOneFan = fanId => Fan.findById(fanId);
