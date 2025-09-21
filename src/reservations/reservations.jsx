import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css' // for styles
import moment from 'moment';

const dummyReservations = [{
        id: 1,
        name: "John Doe",
        partySize: 4,
        time: moment("2025-10-25T18:00:00")
    },
    {
        id: 2,
        name: "Jane Doe",
        partySize: 8,
        time: moment("2025-09-25T13:00:00")
    },
    {
        id: 3,
        name: "Lonny Moe",
        partySize: 2,
        time: moment("2025-10-02T17:00:00")
    },
    {
        id: 4,
        name: "Naisy Roe",
        partySize: 1,
        time: moment("2025-10-25T19:00:00")
    }]

function ReservationsPage() {

  // setting opening times
  // const [openingTimes, setopeningTime] = 

  // selected date from call
  const [selectedDate, setSelectedDate] = useState(moment());
  // setting confirmed reservations
  const [reservations, setDateTime] = useState(dummyReservations);

  // what happens when the date changes
  const handleSelectedDateChange = (newDate) =>  {
    setSelectedDate(newDate);
  };

//   const handleReservationConfirmation = (selectedDate) => {
    
//   }

  const reservationsForSelectedDay = reservations.filter(res => 
    res.time.isSame(selectedDate, 'day')
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>📆 Reservations</h1>
      <p>Selected Date: {selectedDate.format("MMMM Do YYYY")}</p>

      <div style={{ maxWidth: '350px', margin: 'auto' }}>
        <Datetime
          value={selectedDate}
          onChange={handleSelectedDateChange}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Reservations for Today</h3>
        {reservationsForSelectedDay.length > 0 ? (
            <ul>
                {reservationsForSelectedDay.map(res => (
                    <li key={res.id}>
                        {res.name} - {res.partySize} people at {res.time.format('h:mm A')}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No reservations for this date.</p>
        )}
      </div>
    </div>
  );
}

export default ReservationsPage;
