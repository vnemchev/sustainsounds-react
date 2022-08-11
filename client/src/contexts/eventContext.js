import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as eventService from '../services/eventService';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService
            .getAll()
            .then(res => setEvents(res))
            .catch(err => alert(err.message));
    }, []);

    const eventCreate = event => {
        setEvents(state => [event, ...state]);
        navigate('/events');
    };

    const eventEdit = (eventId, event) => {
        setEvents(state => state.map(e => (e._id === eventId ? event : e)));
    };

    const eventDelete = eventId => {
        setEvents(state => state.filter(e => e._id !== eventId));
    };

    return (
        <EventContext.Provider
            value={{
                events,
                eventCreate,
                eventEdit,
                eventDelete,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
