import { useState, useEffect, useContext } from 'react';
import styles from '../EventList/EventList.css';
import * as eventService from '../../../services/eventService';

import EventCard from '../EventCard/EventCard';
import { EventContext } from '../../../contexts/eventContext';

const EventList = () => {
    // const [events, setEvents] = useState([]);
    const { events } = useContext(EventContext);

    // useEffect(() => {
    //     eventService
    //         .getAll()
    //         .then(res => setEvents(res))
    //         .catch(err => alert(err.message));
    // }, []);

    return (
        <>
            {events.length > 0 ? (
                events.map(e => <EventCard event={e} key={e._id} />)
            ) : (
                <h2>No events yet...</h2>
            )}
        </>
    );
};

export default EventList;
