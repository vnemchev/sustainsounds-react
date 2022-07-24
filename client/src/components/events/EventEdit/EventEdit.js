import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as eventService from '../../../services/eventService';

const EventEdit = () => {
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
            .catch(err => alert(err.message));
    }, [eventId]);

    const submitHandler = async e => {
        e.preventDefault();

        eventService.edit(eventId, event).then(res => console.log(res));

        navigate(`/events/${eventId}`);
    };

    const changeHandler = e => {
        setEvent(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Edit an Event</h1>

                <div>
                    <label htmlFor="event-name">name: </label>
                    <input
                        type="text"
                        id="event-name"
                        name="name"
                        value={event.name}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="event-date">date: </label>
                    <input
                        type="date"
                        id="event-date"
                        name="date"
                        value={event.date}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="event-time">time: </label>
                    <input
                        type="time"
                        id="event-time"
                        name="time"
                        value={event.time}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="event-location">location: </label>
                    <input
                        type="text"
                        id="event-location"
                        name="location"
                        value={event.location}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="event-price">$ </label>
                    <input
                        type="number"
                        id="event-price"
                        name="price"
                        value={event.price}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="event-description">description: </label>
                    <textarea
                        id="event-description"
                        name="description"
                        value={event.description}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Edit</button>
                </div>
            </form>
        </>
    );
};

export default EventEdit;
