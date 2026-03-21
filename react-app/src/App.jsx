import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;