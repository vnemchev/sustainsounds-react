import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/util';

import * as eventService from '../../../services/eventService';

const EventDetails = () => {
    const [event, setEvent] = useState();
    const { eventId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        eventService
            .getOne(eventId)
            .then(result => {
                setEvent(result);
            })
            .catch(err => alert(err.message));
    }, [eventId]);

    return (
        <div>
            <h1>Event</h1>
            {event && (
                <div className="event-details">
                    <h3>{event.name}</h3>
                    <h5>
                        {formatDate(event.date, 'display')}, {event.time},
                        {event.location}
                    </h5>
                    <p>{event.price}</p>
                    <p>{event.description}</p>
                    <div>
                        <button
                            onClick={() =>
                                navigate(`/events/${event._id}/edit`)
                            }
                        >
                            Edit
                        </button>

                        <button>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
