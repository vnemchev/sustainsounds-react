import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as eventService from '../services/eventService';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    useEffect(() => {
        eventService
            .getAll()
            .then(res => setGames(res))
            .catch(err => alert(err.message));
    }, []);

    return (
        <GameContext.Provider value={games}>{children}</GameContext.Provider>
    );
};
