import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/util';

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="card">
                <h3>{event.name}</h3>
                <h5>
                    {formatDate(event.date)}, {event.location}
                </h5>
                <button onClick={() => navigate(`/events/${event._id}`)}>
                    Lemme see more!
                </button>
            </div>
        </div>
    );
};

export default EventCard;
