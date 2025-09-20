import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Timetable from '../timetable/Timetable';
import 'react-calendar/dist/Calendar.css'; // import calendar styles

function CalendarPage() {
  const [date, setDate] = useState(new Date());


  // Map dates (as yyyy-mm-dd) to strings
  const dateMap = new Map([
    ["2025-09-20", "Birthday Party!"],
    ["2025-09-21", "Staff Meeting"],
    ["2025-09-22", "Closed for Maintenance"],
  ]);

  // Map dates (as yyyy-mm-dd) to timetable arrays
  const timetableMap = new Map([
    ["2025-09-20", [
      { time: "10:00 AM", event: "Decorate Venue" },
      { time: "12:00 PM", event: "Birthday Lunch" },
      { time: "3:00 PM", event: "Cake Cutting" },
    ]],
    ["2025-09-21", [
      { time: "9:00 AM", event: "Staff Briefing" },
      { time: "11:00 AM", event: "Menu Planning" },
      { time: "2:00 PM", event: "Inventory Check" },
    ]],
    ["2025-09-22", [
      { time: "All Day", event: "Closed for Maintenance" },
    ]],
  ]);

  // Helper to format date as yyyy-mm-dd
function formatDate(d) {
  const nextDay = new Date(d);
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.toISOString().slice(0, 10);
}
  const mappedString = dateMap.get(formatDate(date)) || "\u00A0";
  const timetable = timetableMap.get(formatDate(date)) || [];

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
      }}
    >
      <h1 style={{
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '10px',
        color: '#6366f1',
        letterSpacing: '1px',
      }}>📆 My Calendar</h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#64748b',
        marginBottom: '24px',
      }}>
        Selected Date: {date.toDateString()}
      </p>
      <div style={{
        margin: '16px auto',
        padding: '12px 20px',
        background: '#e0e7ff',
        color: '#3730a3',
        borderRadius: '8px',
        display: 'inline-block',
        fontWeight: 500,
        minHeight: '32px',
        minWidth: '200px',
      }}>
        {mappedString}
      </div>

      {/* Timetable for the selected date */}
      <div style={{
        margin: '20px auto 0',
        padding: '20px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(99, 102, 241, 0.08)',
        maxWidth: '400px',
        width: '100%',
        minHeight: '80px',
      }}>
        <h3 style={{ color: '#6366f1', marginBottom: '12px', fontSize: '1.2rem' }}>Timetable</h3>
        {timetable.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {timetable.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, width: '90px', color: '#818cf8' }}>{item.time}</span>
                <span style={{ color: '#334155' }}>{item.event}</span>
              </li>
            ))}
          </ul>
        ) : (
          <span style={{ color: '#94a3b8' }}>No events scheduled.</span>
        )}
      </div>
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: '32px',
      }}>
        <div style={{ flex: 1 }}>
          <Calendar
            onChange={setDate}
            value={date}
            style={{ width: '100%', height: '100%' }}
            tileClassName={({ date: d, view }) =>
              d.toDateString() === date.toDateString() ? 'selected-date' : ''
            }
          />
        </div>
        <div style={{ flex: 2 }}>
          <Timetable selectedDate={date} />
        </div>
      </div>
      <style>{`
        .react-calendar {
          width: 100% !important;
          height: 100% !important;
          min-width: 300px;
          min-height: 400px;
          border: none;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
          font-family: inherit;
        }
        .react-calendar__tile--active,
        .react-calendar__tile--now {
          background: #6366f1 !important;
          color: #fff !important;
          border-radius: 8px;
        }
        .react-calendar__tile.selected-date {
          background: #818cf8 !important;
          color: #fff !important;
          border-radius: 8px;
        }
        .react-calendar__tile:enabled:hover {
          background: #e0e7ff !important;
          color: #6366f1 !important;
        }
        .react-calendar__navigation button {
          color: #6366f1;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

export default CalendarPage;
