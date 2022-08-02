import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('user', {});

    const userLogin = authData => {
        setAuth(authData);
    };

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
