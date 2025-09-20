import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // import calendar styles

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>📆 My Calendar</h1>
      <p>Selected Date: {date.toDateString()}</p>

      <div style={{ maxWidth: '350px', margin: 'auto' }}>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

export default CalendarPage;
