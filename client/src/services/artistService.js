import * as api from '../utils/requester';

export const getAll = async () => {
    return api.get('/artists');
};

export const getOneArtist = async artistId => {
    return api.get(`/artists/${artistId}`);
};

export const edit = async (artistId, artistData) => {
    return api.put(`/events/${artistId}`, artistData);
};

export const remove = async eventId => {
    return api.del(`/events/${eventId}`);
};

export const getOneFan = async artistId => {
    return api.get(`/fans/${artistId}`);
};
