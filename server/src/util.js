exports.getUsername = email => {
    const splitEmail = email.split('@');
    
    return splitEmail[0];
};
