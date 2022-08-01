import * as api from '../utils/requester';

export const getAllArtists = async () => {
    return api.get('/users/artists');
};

export const getOneArtist = async artistId => {
    return api.get(`/users/artists/${artistId}`);
};

export const editArtist = async (artistId, artistData) => {
    return api.put(`/users/artists/${artistId}`, artistData);
};

export const getOneFan = async artistId => {
    return api.get(`/users/fans/${artistId}`);
};
