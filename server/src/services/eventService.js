const Event = require('../models/Event');
const Artist = require('../models/users/Artist');

exports.getOne = eventId => Event.findById(eventId);

exports.getAll = () => Event.find({});

exports.create = async ({
    name,
    date,
    time,
    location,
    price,
    imageUrl,
    description,
    _ownerId,
}) => {
    const isExisting = await checkIfExistingEvent(name);

    if (isExisting) {
        throw new Error('This event name is taken');
    }

    const createdEvent = await Event.create({
        name,
        date,
        time,
        location,
        price,
        imageUrl,
        description,
        _ownerId,
    });

    return createdEvent;
};

exports.edit = async (existing, event) => {
    existing.name = event.name;
    existing.date = event.date;
    existing.time = event.time;
    existing.location = event.location;
    existing.price = event.price;
    existing.imageUrl = event.imageUrl;
    existing.description = event.description;

    await existing.save();

    return existing;
};

exports.remove = async eventId => {
    const event = await Event.findById(eventId);
    const artist = await Artist.findById(ownerId);
    const ownerId = event._ownerId;

    const index = artist.eventsCreated.indexOf(event._id);
    artist.eventsCreated.splice(index, 1);

    await Event.findByIdAndDelete(eventId);
    await artist.save();
};

const checkIfExistingEvent = async name => {
    const settings = { name: new RegExp(`^${name}$`, 'i') };

    const event = await Event.findOne(settings);

    return event;
};
