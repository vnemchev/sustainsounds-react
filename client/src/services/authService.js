import * as api from '../utils/requester';

export const register = async userData => {
    return api.post('/auth/register', userData);
};

export const login = async userData => {
    return api.post('/auth/login', userData);
};

export const logout = async accessToken => {
    return api.post('/auth/logout', accessToken);
};
