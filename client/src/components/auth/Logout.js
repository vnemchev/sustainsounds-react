import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';

import * as authService from '../../services/authService';

const Logout = () => {
    const navigate = useNavigate();

    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService
            .logout()
            .then(() => {
                userLogout();
                localStorage.clear();
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => navigate('/'));
    });

    return null;
};

export default Logout;
