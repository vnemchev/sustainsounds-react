export const register = async userData => {
    const response = await fetch('http://localhost:3030/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        const user = await response.json();

        return user;
    } else {
        throw new Error('Unable to create user');
    }
};
