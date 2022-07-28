import * as api from '../utils/requester';

export const getAll = async () => {
    return api.get('/events');
};

export const getOne = async eventId => {
    return api.get(`/events/${eventId}`);
};

export const create = async eventData => {
    return api.post('/events', eventData);
};

export const edit = async (eventId, eventData) => {
    return api.put(`/events/${eventId}`, eventData);
};
