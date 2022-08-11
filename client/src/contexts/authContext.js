import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        _id: '',
        email: '',
        accessToken: '',
        alias: '',
        eventsAttended: [],
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        setAuth(user);
    }, []);

    const userLogin = authData => {
        localStorage.setItem('user', JSON.stringify(authData));

        setAuth(() => ({
            _id: authData?._id,
            email: authData?.email,
            accessToken: authData?.accessToken,
            alias: authData?.alias,
            eventsAttended: authData?.eventsAttended,
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
        setAuth(state => {
            const events = [...state.eventsAttended, eventId];

            return { ...state, eventsAttended: events };
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user: auth,
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
