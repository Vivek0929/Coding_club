import EventsHeader from '../components/Events/EventsHeader';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import PastEvents from '../components/Events/PastEvents';

const EventsPage = () => {
  return (
    <div>
      <EventsHeader />
      <UpcomingEvents />
      <PastEvents />
    </div>
  );
};

export default EventsPage;