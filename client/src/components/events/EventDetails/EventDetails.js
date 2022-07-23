import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as eventService from '../../../services/eventService';

const EventDetails = () => {
    const [event, setEvent] = useState();

    const { eventId } = useParams();

    useEffect(() => {
        eventService
            .getOne(eventId)
            .then(e => {
                setEvent(e);
            })
            .catch(err => alert(err.message));
    }, []);

    return (
        <div>
            <h1>Event</h1>
            {event && (
                <div className="event-details">
                    <h3>{event.name}</h3>
                    <h5>
                        {event.date}, {event.time}, {event.location}
                    </h5>
                    <p>{event.price}</p>
                    <p>{event.description}</p>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
