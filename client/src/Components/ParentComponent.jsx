import React, { useState } from 'react';
import BookingPage from '../Pages/BookingPage';
import CheckOutPage from '../Pages/CheckOutPage';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const availableCars = [
    { id: 1, name: 'Toyota Camry', model: '2022' },
    { id: 2, name: 'Honda Accord', model: '2021' },
    // Add more car details as needed
  ];

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    // Additional logic for handling booking, e.g., API call
  };

  return (
    <div>
      {!bookingDetails ? (
        <BookingPage availableCars={availableCars} onBookingSubmit={handleBookingSubmit} />
      ) : (
        <CheckOutPage bookingDetails={bookingDetails} />
      )}
    </div>
  );
};

export default App;
