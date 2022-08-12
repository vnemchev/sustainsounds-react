import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/authContext';
import { EventContext } from '../../../contexts/eventContext';
import * as eventService from '../../../services/eventService';

import styles from '../../../App.module.css';

const EventEdit = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();

    const { eventEdit } = useContext(EventContext);
    const { user } = useContext(AuthContext);

    const [errors, setErrors] = useState({});
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
    }, [eventId]);

    const isOwner = user._id === event._ownerId;

    const submitHandler = e => {
        e.preventDefault();

        if (Object.values(errors).some(x => x)) {
            return console.log(errors);
        }

        if (!isOwner) return;

        eventService
            .edit(eventId, event)
            .then(res => {
                setEvent(res);
                eventEdit(eventId, res);
            })
            .catch(err => navigate('/404'));
    };

    const changeHandler = e => {
        setEvent(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: event[e.target.name].length < bound,
        }));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h1 className={styles.heading}>Edit</h1>

                <div className="form-group">
                    <label htmlFor="event-name">name: </label>
                    <input
                        className="form-control"
                        type="text"
                        id="event-name"
                        name="name"
                        value={event.name}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 3)}
                    ></input>
                    {errors.name && (
                        <p className={styles.note}>
                            Name must be at least 3 symbols!
                        </p>
                    )}

                    <label htmlFor="event-date">date: </label>
                    <input
                        className="form-control"
                        type="date"
                        id="event-date"
                        name="date"
                        value={event.date}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 10)}
                    ></input>
                    {errors.date && (
                        <p className={styles.note}>
                            Date must be at least 11 symbols!
                        </p>
                    )}

                    <label htmlFor="event-time">time: </label>
                    <input
                        className="form-control"
                        type="time"
                        id="event-time"
                        name="time"
                        value={event.time}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 5)}
                    ></input>
                    {errors.time && (
                        <p className={styles.note}>
                            Time must be at least 5 symbols!
                        </p>
                    )}

                    <label htmlFor="event-location">location: </label>
                    <input
                        className="form-control"
                        type="text"
                        id="event-location"
                        name="location"
                        value={event.location}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 2)}
                    ></input>
                    {errors.location && (
                        <p className={styles.note}>
                            Location must be at least 2 symbols!
                        </p>
                    )}

                    <label htmlFor="event-price">price in euro: </label>
                    <input
                        className="form-control"
                        type="number"
                        id="event-price"
                        name="price"
                        value={event.price}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 1)}
                    ></input>
                    {errors.price && (
                        <p className={styles.note}>
                            Price must be at least 1 symbol!
                        </p>
                    )}

                    <label htmlFor="event-imageUrl">image: </label>
                    <input
                        className="form-control"
                        type="text"
                        id="event-imageUrl"
                        name="imageUrl"
                        value={event.imageUrl}
                        onChange={changeHandler}
                    ></input>

                    <label htmlFor="event-description">description: </label>
                    <textarea
                        rows={4}
                        className="form-control"
                        id="event-description"
                        name="description"
                        value={event.description}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn-secondary">
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventEdit;
