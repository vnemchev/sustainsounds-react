export const formatDate = (date, option) => {
    const [year, month, day] = date.split('-');

    if (option === 'display') {
        return `${day}.${month}.${year}`;
    } else if (option === 'edit') {
        return `${day}/${month}/${year}`;
    }
};

export const getUsername = email => {
    const splitEmail = email.split('@');
    return splitEmail[0];
};

export const getAccessToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user.accessToken;
    } else {
        return null;
    }
};
