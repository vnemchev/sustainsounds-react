import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { formatDate } from '../../../utils/util';
import { EventContext } from '../../../contexts/eventContext';
import { AuthContext } from '../../../contexts/authContext';
import * as eventService from '../../../services/eventService';
import * as userService from '../../../services/userService';

import styles from './EventDetails.module.css';

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

    const deleteHandler = () => {
        if (isOwner) {
            eventService.remove(eventId);

            eventDelete(eventId);

            navigate('/events');
        }
    };

    const isOwner = user._id === event._ownerId;

    let hasAttended = user?.eventsAttended?.includes(eventId);

    if (hasAttended !== true) {
        hasAttended = false;
    }

    console.log(user);

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventContainer}>
                <h1>{event.name}</h1>
                <img src={event.imageUrl} alt={event.name}></img>
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
                {user.email ? (
                    <>
                        {!hasAttended && !isOwner && (
                            <button onClick={attendHandler}>Attend</button>
                        )}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default EventDetails;
