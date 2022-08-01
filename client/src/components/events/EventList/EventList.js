import EventCard from '../EventCard/EventCard';

const EventList = ({ events }) => {
    return (
        <>
            <div>
                {events?.map(x => (
                    <EventCard key={x._id} event={x} />
                ))}
            </div>
        </>
    );
};

export default EventList;
