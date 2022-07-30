import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { formatDate } from '../../../utils/util';
import * as eventService from '../../../services/eventService';

const EventDetails = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        name: '',
        date: '',
        time: '',
        location: '',
        price: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        eventService
            .getOne(eventId)
            .then(res => setEvent(res))
            .catch(err => console.log(err));
    }, [event, eventId]);

    const deleteHandler = () => {
        eventService.remove(eventId);
        navigate('/events');
    };

    return (
        <div>
            <h1>Event</h1>
            {
                <div className="event-details">
                    <h3>{event.name}</h3>
                    <h5>
                        {event.date}, {event.time}, {event.location}
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

                        <button onClick={deleteHandler}>Delete</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default EventDetails;
