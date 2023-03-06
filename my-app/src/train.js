import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

const TrainCoach = () => {
  // Initialize seats as an array of 80 objects, each with a unique id, row, and column
  const [seats, setSeats] = useState(
    Array(80)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        row: Math.floor(index / 7) + 1,
        column: (index % 7) + 1,
        status: 'available', // Initialize all seats as available
      }))
  );

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    // Find the seat with the given id
    const seatIndex = seats.findIndex((seat) => seat.id === seatId);
    const updatedSeat = { ...seats[seatIndex] };

    if (updatedSeat.status === 'available') {
      if (selectedSeats.length < 7) {
        updatedSeat.status = 'selected';
        setSelectedSeats([...selectedSeats, updatedSeat]);
      }else {
        alert('You can only select up to 7 seats at a time.');
      }
    } else if (updatedSeat.status === 'selected') {
      updatedSeat.status = 'available';
      const updatedSelectedSeats = selectedSeats.filter(
        (seat) => seat.id !== seatId
      );
      setSelectedSeats(updatedSelectedSeats);
    }

    // Update the seat with the new status
    const updatedSeats = [...seats];
    updatedSeats[seatIndex] = updatedSeat;
    setSeats(updatedSeats);
  };

  return (
    <Container className="train-coach">
      {seats.map((seat) => (
        <Button
          key={seat.id}
          variant={seat.status === 'available' ? 'light' : 'primary'}
          className="seat"
          disabled={seat.status !== 'available' && seat.status !== 'selected'}
          onClick={() => handleSeatClick(seat.id)}
        >
          {seat.row}, {seat.column}
        </Button>
      ))}
      {selectedSeats.length > 0 && (
        <Row>
          <Col>
            <p>You have selected the following seats:</p>
            <ul>
              {selectedSeats.map((seat) => (
                <li key={seat.id}>
                  {seat.row}, {seat.column}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TrainCoach;

