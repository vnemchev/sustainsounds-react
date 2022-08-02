import * as api from '../utils/requester';

export const getAllArtists = async () => {
    return api.get('/users/artists');
};

export const getOneArtist = async artistId => {
    return api.get(`/users/artists/${artistId}`);
};

export const getOneArtistDetailed = async artistId => {
    return api.get(`/users/artists/${artistId}/detailed`);
};

export const getOneFan = async fanId => {
    return api.get(`/users/fans/${fanId}`);
};

export const getOneFanDetailed = async fanId => {
    return api.get(`/users/fans/${fanId}/detailed`);
};

export const editArtist = async (artistId, artistData) => {
    return api.put(`/users/artists/${artistId}`, artistData);
};

export const attendEvent = async (userId, eventId) => {
    return api.get(`/users/${userId}/${eventId}`);
};
