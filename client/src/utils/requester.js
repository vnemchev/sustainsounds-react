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
            if (response.status === 204) {
                return response;
            } else {
                return response.json();
            }
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        throw new Error('Something went wrong!');
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
