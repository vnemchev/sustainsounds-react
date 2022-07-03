const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Artist = require('../models/users/Artist');
const Raver = require('../models/users/Raver');

const SALT_ROUNDS = 10;

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

const checkIfExisting = async email => {
    const user =
        (await Artist.findOne({ email: new RegExp(`^${email}$`, 'i') })) ||
        (await Raver.findOne({ email: new RegExp(`^${email}$`, 'i') }));

    return user;
};
