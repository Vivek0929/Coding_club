import EventCard from './EventCard';
import './PastEvents.css';

const PastEvents = () => {
  const events = [
    {
      title: "CodeFest 2023",
      date: "December 10-11, 2023",
      time: "10:00 AM - 6:00 PM",
      place: "Engineering Auditorium",
      description: "Annual coding festival with workshops, contests, and guest speakers from top tech companies."
    },
    {
      title: "AI Workshop",
      date: "November 5, 2023",
      time: "2:00 PM - 5:00 PM",
      place: "Lab 201",
      description: "Introduction to Artificial Intelligence and Machine Learning with hands-on projects."
    },
    {
      title: "Game Dev Jam",
      date: "October 20, 2023",
      time: "11:00 AM - 7:00 PM",
      place: "Game Lab",
      description: "Build and ship a game in one day with mentors, teams, and prizes for the best concept."
    }
  ];

  return (
    <section className="Past_events">
      <div className="In_Past_events">
        <h1 className="Past_Events_1">Past Events</h1>
        <section className="Past_Events_section d-flex flex-row justify-content-center">
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

export default PastEvents;