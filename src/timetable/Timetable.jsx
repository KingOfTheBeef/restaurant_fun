import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    title: 'Breakfast Meeting',
    start: new Date(2025, 8, 20, 8, 0),
    end: new Date(2025, 8, 20, 9, 0),
  },
  {
    title: 'Lunch with Team',
    start: new Date(2025, 8, 20, 12, 0),
    end: new Date(2025, 8, 20, 13, 0),
  },
];

function Timetable({ selectedDate }) {
  const [events, setEvents] = useState(initialEvents);

  // Filter events for the selected date
  const filteredEvents = events.filter(event => {
    return (
      event.start.toDateString() === selectedDate.toDateString()
    );
  });

  return (
    <div style={{ height: '600px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(99,102,241,0.08)', padding: '16px' }}>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        views={['day', 'agenda']}
        date={selectedDate}
        style={{ height: '100%', minHeight: 500 }}
      />
    </div>
  );
}

export default Timetable;
