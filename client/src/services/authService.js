import * as api from '../utils/requester';

export const register = async userData => {
    return api.post('/auth/register', userData);
};
