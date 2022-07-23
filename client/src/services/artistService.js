const baseUrl = 'http://localhost:3030/artists';

export const getAll = async () => {
    const response = await fetch(baseUrl);

    if (response.ok) {
        const events = await response.json();
        return events;
    } else {
        throw new Error('No Events Found!');
    }
};
