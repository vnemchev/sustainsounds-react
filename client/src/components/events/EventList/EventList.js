import { useContext } from 'react';

import EventCard from '../EventCard/EventCard';
import { EventContext } from '../../../contexts/eventContext';

const EventList = () => {
    const { events } = useContext(EventContext);

    return (
        <>
            {events.length > 0 ? (
                events.map(e => <EventCard event={e} key={e._id} />)
            ) : (
                <h2>No events yet...</h2>
            )}
        </>
    );
};

export default EventList;
