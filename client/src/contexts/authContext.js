import { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useLocalStorage('user', {});
    const [auth, setAuth] = useState({});

    const userLogin = authData => {
        localStorage.setItem('user', JSON.stringify(authData));
        setAuth(() => ({
            _id: authData._id,
            email: authData.email,
            accessToken: authData.accessToken,
            alias: authData.alias,
        }));
    };
    console.log(auth);
    const userLogout = () => {
        localStorage.removeItem('user');
        setAuth({});
    };

    const aliasUpdate = alias => {
        setAuth(state => ({ ...state, alias }));
    };

    return (
        <AuthContext.Provider
            value={{
                user: auth,
                userLogin,
                userLogout,
                aliasUpdate,
                isAuthenticated: Boolean(auth.accessToken),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
