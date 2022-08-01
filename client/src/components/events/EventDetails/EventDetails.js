import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { formatDate } from '../../../utils/util';
import { EventContext } from '../../../contexts/eventContext';
import * as eventService from '../../../services/eventService';

const EventDetails = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const { eventDelete } = useContext(EventContext);

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
    }, []);

    const deleteHandler = () => {
        eventService.remove(eventId);

        eventDelete(eventId);
        
        navigate('/events');
    };

    return (
        <>
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
        </>
    );
};

export default EventDetails;
