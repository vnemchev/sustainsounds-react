import { useNavigate } from 'react-router-dom';

import { formatDate } from '../../../utils/util';

import styles from '../../Card.module.css';

const EventCard = ({ event }) => {
    const navigate = useNavigate();

    return (
        <div
            className={styles.card}
            onClick={() => navigate(`/events/${event._id}`)}
        >
            <div>
                <h2 className={styles.eventName}>{event.name}</h2>
            </div>

            <div className={styles.dateLocation}>
                <h3>{event.location}</h3>
                <h3>{formatDate(event.date, 'display')}</h3>
            </div>
        </div>
    );
};

export default EventCard;
