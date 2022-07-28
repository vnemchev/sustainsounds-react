const Event = require('../models/Event');

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

exports.edit = async (
    eventId,
    { _id, name, date, time, location, price, imageUrl, description },
) => {
    const isExisting = await checkIfExistingEvent(name);

    if (!isExisting) {
        throw new Error("This event doesn't exist!");
    }

    const editedEvent = await Event.findByIdAndUpdate(
        eventId,
        {
            _id,
            name,
            date,
            time,
            location,
            price,
            imageUrl,
            description,
        },
        { runValidators: true },
    );

    return editedEvent;
};

const checkIfExistingEvent = async name => {
    const settings = { name: new RegExp(`^${name}$`, 'i') };

    const event = await Event.findOne(settings);

    return event;
};
