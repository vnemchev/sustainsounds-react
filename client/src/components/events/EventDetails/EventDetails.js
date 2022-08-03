import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { formatDate } from '../../../utils/util';
import { EventContext } from '../../../contexts/eventContext';
import { AuthContext } from '../../../contexts/authContext';
import * as eventService from '../../../services/eventService';
import * as userService from '../../../services/userService';

const EventDetails = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const { eventDelete } = useContext(EventContext);
    const { user, attendEvent } = useContext(AuthContext);

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

    const attendHandler = async () => {
        if (!user.eventsAttended.includes(eventId)) {
            await userService.attendEvent(user._id, eventId);

            attendEvent(eventId);
        }
    };

    const isOwner = user._id === event._ownerId;

    console.log(isOwner);

    const deleteHandler = () => {
        if (isOwner) {
            eventService.remove(eventId);

            eventDelete(eventId);

            navigate('/events');
        }
    };

    return (
        <>
            <div>
                <h1>Event</h1>
                {
                    <div className="event-details">
                        <h3>{event.name}</h3>

                        <h4>{event.location}</h4>
                        <h5>
                            {formatDate(event.date, 'display')}, {event.time}
                        </h5>
                        <p>{event.price}</p>
                        <p>{event.description}</p>

                        {isOwner && (
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
                        )}
                        {user && !user.eventsAttended.includes(eventId) && (
                            <button onClick={attendHandler}>Attend</button>
                        )}
                    </div>
                }
            </div>
        </>
    );
};

export default EventDetails;
