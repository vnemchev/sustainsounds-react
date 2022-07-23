import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="card">
                <h3>{event.name}</h3>
                <h5>
                    {event.date}, {event.location}
                </h5>
                <button
                    onClick={() => navigate(`/events/${event._id}`)}
                ></button>
            </div>
        </div>
    );
};

export default EventCard;
