const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Artist = require('../models/users/Artist');
const Fan = require('../models/users/Fan');

const SALT_ROUNDS = 10;
const JWT_SECRET = 'hjokslf87^34h#uf893jn_juiq28';

exports.register = async ({ email, password, alias }) => {
    const existing = await checkIfExistingUser(email);

    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    let createdUser = '';

    if (alias) {
        createdUser = await Artist.create({
            email,
            password: hashedPassword,
            alias,
        });
    } else {
        createdUser = await Fan.create({
            email,
            password: hashedPassword,
        });
    }

    return createSession(createdUser);
};

exports.login = async ({ email, password }) => {
    const user = await checkIfExistingUser(email);

    if (!user) {
        throw new Error('Incorrect email or password!');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password!');
    }

    return createSession(user);
};

exports.logout = () => {};

const createSession = user => {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    const result = {
        _id: user._id,
        email: user.email,
        token,
    };

    if (user.alias) {
        result['alias'] = user.alias;
    }

    return result;
};

const checkIfExistingUser = async email => {
    const settings = { email: new RegExp(`^${email}$`, 'i') };

    const user = (await Artist.findOne(settings)) || (await Fan.findOne(settings));

    return user;
};
