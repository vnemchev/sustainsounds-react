const baseUrl = 'http://localhost:3030/events';

export const getAll = async () => {
    const response = await fetch(baseUrl);

    if (response.ok) {
        const events = await response.json();
        return events;
    } else {
        throw new Error('No Events Found!');
    }
};

export const getOne = async eventId => {
    const response = await fetch(`${baseUrl}/${eventId}`);

    if (response.ok) {
        const event = await response.json();
        console.log(event);
        return event;
    } else {
        throw new Error('Event not Found!');
    }
};

export const create = async eventData => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    if (response.ok) {
        const event = await response.json();

        return event;
    } else {
        throw new Error('Unable to create event');
    }
};
