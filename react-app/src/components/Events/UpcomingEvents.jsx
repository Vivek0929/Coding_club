import EventCard from './EventCard';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      title: "HackNight 2024",
      date: "March 15-16, 2024",
      time: "6:00 PM - 8:00 AM",
      place: "Computer Science Building",
      description: "24-hour hackathon where teams compete to build innovative solutions. Amazing prizes and networking opportunities await!"
    },
    {
      title: "Code Sprint",
      date: "April 5, 2024",
      time: "10:00 AM - 5:00 PM",
      place: "Tech Hub Room 3",
      description: "A one-day coding sprint focused on algorithm challenges and rapid prototyping."
    },
    {
      title: "Web Dev Workshop",
      date: "May 12, 2024",
      time: "9:00 AM - 4:00 PM",
      place: "Lab 404",
      description: "Hands-on workshop on modern web development with React, CSS animations, and responsive design."
    }
  ];

  return (
    <section className="Upcoming_events">
      <div className="In_Upcoming_events">
        <h1 className="Upcoming_Events_1">Upcoming Events</h1>
        <section className="Upcoming_Events_section d-flex flex-row justify-content-center">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              place={event.place}
              description={event.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default UpcomingEvents;