import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" id="Nav_head" to="/">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUteG1sLWljb24gbHVjaWRlLWNvZGUteG1sIj48cGF0aCBkPSJtMTggMTYgNC00LTQtNCIvPjxwYXRoIGQ9Im02IDgtNCA0IDQgNCIvPjxwYXRoIGQ9Im0xNC41IDQtNSAxNiIvPjwvc3ZnPg=="
          className="img1"
          alt="Code icon"
        />
        CSE Coding Club
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
            to="/events"
          >
            Events
          </Link>
          <Link
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            to="/about"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;