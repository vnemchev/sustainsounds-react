exports.getUsername = email => {
    return email.split('@')[0];
};
