import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalendarPage from "./calendar/calendar.jsx"; // Import your calendar component
import ReservationsPage from "./reservations/reservations.jsx"; // import the reservations page

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/calendar">Calendar</Link> |{" "}
        <Link to="/reservations">Reservations</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;