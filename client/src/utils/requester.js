import { getAccessToken } from './util';

const host = 'http://localhost:3030';

const request = async (method, endpoint, data) => {
    const options = {
        method,
        headers: {},
    };
    const token = getAccessToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + endpoint, options);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Bad request!');
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
