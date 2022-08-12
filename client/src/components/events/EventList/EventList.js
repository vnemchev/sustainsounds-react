import { useContext } from 'react';

import EventCard from '../EventCard/EventCard';
import { EventContext } from '../../../contexts/eventContext';

const EventList = () => {
    const { events } = useContext(EventContext);

    const style = {
        display: 'flex',
        flexDirection: 'column-reverse',
    };

    return (
        <div style={style}>
            {events.length > 0 ? (
                events.map(e => <EventCard event={e} key={e._id} />)
            ) : (
                <h2>No events yet...</h2>
            )}
        </div>
    );
};

export default EventList;
