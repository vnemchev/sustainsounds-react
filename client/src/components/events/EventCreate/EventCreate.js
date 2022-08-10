import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { EventContext } from '../../../contexts/eventContext';

import * as eventService from '../../../services/eventService';

const EventCreate = () => {
    const navigate = useNavigate();
    const { eventCreate } = useContext(EventContext);

    const [event, setEvent] = useState({
        name: '',
        date: '',
        time: '',
        location: '',
        price: '',
        imageUrl: '',
        description: '',
    });

    const submitHandler = async e => {
        e.preventDefault();

        await eventService.create(event);

        eventCreate(event);
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
                <h1>Create an Event</h1>

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
                    <label htmlFor="event-imageUrl">image: </label>
                    <input
                        type="text"
                        id="event-imageUrl"
                        name="imageUrl"
                        value={event.imageUrl}
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
                    <button type="submit">Create</button>
                </div>
            </form>
        </>
    );
};

export default EventCreate;
