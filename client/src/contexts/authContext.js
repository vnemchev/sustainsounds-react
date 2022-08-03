import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [eventsAttended, setEventsAttended] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setAuth(user);
    }, []);

    const userLogin = authData => {
        localStorage.setItem('user', JSON.stringify(authData));

        setAuth(() => ({
            _id: authData._id,
            email: authData.email,
            accessToken: authData.accessToken,
            alias: authData.alias,
        }));
    };

    const userLogout = () => {
        localStorage.removeItem('user');
        setAuth({});
    };

    const aliasUpdate = alias => {
        setAuth(state => ({ ...state, alias }));
    };

    const attendEvent = eventId => {
        setEventsAttended(state => [...state, eventId]);
    };

    return (
        <AuthContext.Provider
            value={{
                user: auth,
                eventsAttended,
                userLogin,
                userLogout,
                aliasUpdate,
                attendEvent,
                isAuthenticated: Boolean(auth.accessToken),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
