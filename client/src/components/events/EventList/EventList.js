import { useState, useEffect } from 'react';
import styles from '../EventList/EventList.css';
import * as eventService from '../../../services/eventService';

import EventCard from '../EventCard/EventCard';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService
            .getAll()
            .then(res => setEvents(res))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="list-container">
            {events.map(e => (
                <EventCard event={e} key={e._id} />
            ))}
        </div>
    );
};

export default EventList;
