const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Artist = require('../models/users/Artist');
const Raver = require('../models/users/Raver');

const SALT_ROUNDS = 10;
const JWT_SECRET = 'hjokslf87^34h#uf893jn_juiq28';

exports.registerArtist = async (email, password, data) => {
    const existing = await checkIfExisting(email);

    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const createdArtist = await Artist.create({
        email,
        password: hashedPassword,
        alias: data.alias,
        bio: data.bio,
        genre: data.genre,
        imageUrl: data.imageUrl,
    });

    return createdArtist;
};

exports.registerRaver = async (email, password) => {
    const existing = await checkIfExisting(email);

    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const createdRaver = await Raver.create({
        email,
        password: hashedPassword,
    });

    return createdRaver;
};

exports.login = async (email, password) => {
    const user = await checkIfExisting(email);

    if (!user) {
        throw new Error('Incorrect email or password!');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password!');
    }
};

exports.logout = () => {};

const createSession = user => {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return {
        _id: user._id,
        email: user.email,
        token,
    };
};

const checkIfExisting = async email => {
    const settings = { email: new RegExp(`^${email}$`, 'i') };

    const user = (await Artist.findOne(settings)) || (await Raver.findOne(settings));

    return user;
};
