import { useEffect, useState } from 'react';
import * as eventService from '../../services/eventService';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService.getAll().then(result => setEvents(result));
    }, []);

    return (
        <>
            <div>Hello</div>
            {events.length > 0 ? (
                events.map(event => (
                    <div key={event._id}>
                        <h2>{event.name}</h2>
                    </div>
                ))
            ) : (
                <h3>No events!</h3>
            )}
        </>
    );
};
export default Home;
