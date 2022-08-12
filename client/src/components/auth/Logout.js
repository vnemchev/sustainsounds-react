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
                navigate('/');
            })
            .catch(err => {
                navigate('/404');
            });
    });

    return null;
};

export default Logout;
