import './EventCard.css';

const EventCard = ({ title, date, time, place, description }) => {
  return (
    <div className="Card_of_Upcoming_Events_1">
      <h1 className="head_for_Upcoming_Events_card">{title}</h1>
      <p className="Upcoming_event_Dates">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWFycm93LXVwLWljb24gbHVjaWRlLWNhbGVuZGFyLWFycm93LXVwIj48cGF0aCBkPSJtMTQgMTggNC00IDQgNCIvPjxwYXRoIGQ9Ik0xNiAydjQiLz48cGF0aCBkPSJNMTggMjJ2LTgiLz48cGF0aCBkPSJNMjEgMTEuMzQzVjZhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmg5Ii8+PHBhdGggZD0iTTMgMTBoMTgiLz48cGF0aCBkPSJNOCAydjQiLz48L3N2Zz4="
          className="img_upcoming_calender"
          alt="Calendar icon"
        />
        {date}
      </p>
      <p className="Upcoming_event_Time">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsb2NrLWljb24gbHVjaWRlLWNsb2NrIj48cGF0aCBkPSJNMTIgNnY2bDQgMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+"
          className="img_upcoming_time"
          alt="Clock icon"
        />
        {time}
      </p>
      <p className="Upcoming_event_place">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4taWNvbiBsdWNpZGUtbWFwLXBpbiI+PHBhdGggZD0iTTIwIDEwYzAgNC45OTMtNS41MzkgMTAuMTkzLTcuMzk5IDExLjc5OWExIDEgMCAwIDEtMS4yMDIgMEM5LjUzOSAyMC4xOTMgNCAxNC45OTMgNCAxMGE4IDggMCAwIDEgMTYgMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48L3N2Zz4="
          className="img_upcoming_place"
          alt="Map pin icon"
        />
        {place}
      </p>
      <p className="para_for_end_cards">{description}</p>
      <div className="button_of_registration">
        <button className="register_now_btn">Register Now</button>
      </div>
    </div>
  );
};

export default EventCard;