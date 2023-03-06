import React, { useState } from 'react';
import axios from 'axios';

function TrainCoachBooking() {
  const [numSeats, setNumSeats] = useState('');
  const [message, setMessage] = useState('');

  const bookSeats = async () => {
    const response = await axios.post('/book-seats', { numSeats });
    if (response.status === 200) {
      if (response.data.bookedSeats.length > 0) {
        setMessage(`Booked seats: ${response.data.bookedSeats.join(', ')}`);
      } else {
        setMessage('Sorry, requested number of seats not available!');
      }
    }
  };

  return (
    <div>
      <h2>Train Coach Booking</h2>
      <label>
        Number of Seats:
        <input type="number" value={numSeats} onChange={(e) => setNumSeats(e.target.value)} />
      </label>
      <button onClick={bookSeats}>Book Seats</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default TrainCoachBooking;
