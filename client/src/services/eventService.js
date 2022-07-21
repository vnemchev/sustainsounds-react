export const getAll = async () => {
    const response = await fetch('http://localhost:3030/events');

    if (response.ok) {
        const events = await response.json();
        console.log(events);
        return events;
    } else {
        throw new Error('No Events Found!');
    }
};

export const create = async eventData => {
    const response = await fetch('http://localhost:3030/events', {
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
