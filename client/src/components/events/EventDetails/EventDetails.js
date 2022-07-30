import { useParams, useNavigate } from 'react-router-dom';

import { formatDate } from '../../../utils/util';
import useFetch from '../../../hooks/useFetch';
import * as eventService from '../../../services/eventService';

const EventDetails = () => {
    const { eventId } = useParams();
    const { data, isLoading, error } = useFetch(`/events/${eventId}`);
    const navigate = useNavigate();

    const deleteHandler = () => {
        eventService.remove(eventId);
        navigate('/events');
    };

    return (
        <div>
            <h1>Event</h1>
            {isLoading ? (
                <h4>Loading...</h4>
            ) : (
                data && (
                    <div className="event-details">
                        <h3>{data.name}</h3>
                        <h5>
                            {formatDate(data.date, 'display')}, {data.time},
                            {data.location}
                        </h5>
                        <p>{data.price}</p>
                        <p>{data.description}</p>
                        <div>
                            <button
                                onClick={() =>
                                    navigate(`/events/${data._id}/edit`)
                                }
                            >
                                Edit
                            </button>

                            <button onClick={deleteHandler}>Delete</button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default EventDetails;
