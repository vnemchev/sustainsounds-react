import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { EventContext } from '../../../contexts/eventContext';
import { AuthContext } from '../../../contexts/authContext';
import * as eventService from '../../../services/eventService';
import * as userService from '../../../services/userService';
import { formatDate } from '../../../utils/util';

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
            .catch(err => navigate('/404'));
    }, []);

    const attendHandler = async () => {
        if (!user.eventsAttended.includes(eventId)) {
            await userService.attendEvent(user._id, eventId);

            attendEvent(eventId);
        }
    };

    const deleteHandler = () => {
        if (isOwner) {
            const confirm = prompt(`To delete, type "${event.name}"`);

            if (confirm === event.name) {
                eventService.remove(eventId);

                eventDelete(eventId);
            }
        }
    };

    let isOwner = user._id === event._ownerId;
    let hasAttended = user?.eventsAttended?.includes(eventId);

    if (hasAttended !== true) {
        hasAttended = false;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventContainer}>
                <div className={styles.infoContainer}>
                    <h1 className={styles.eventName}>{event.name}</h1>
                    <img src={event.imageUrl} alt={event.name}></img>
                    <h2>{event.location}</h2>
                    <h3>
                        {formatDate(event.date, 'display')}, {event.time}
                    </h3>
                    <h3>&euro;{event.price}</h3>
                    <p className={styles.description}>{event.description}</p>

                    <div className={styles.buttons}>
                        {isOwner && (
                            <>
                                <button
                                    className="btn-secondary"
                                    onClick={() =>
                                        navigate(`/events/${event._id}/edit`)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn-secondary"
                                    onClick={deleteHandler}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                        {user.email ? (
                            <>
                                {!hasAttended && !isOwner && (
                                    <button
                                        className="btn-secondary"
                                        onClick={attendHandler}
                                    >
                                        Attend
                                    </button>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
