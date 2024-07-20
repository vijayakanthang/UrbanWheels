import React, { useState } from "react";
import "../stylesheet/BookingPage.css";

const BookingPage = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [additionalServices, setAdditionalServices] = useState({
    gps: false,
    childSeat: false,
    additionalDriver: false,
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const carDetails = {
    name: "Tesla Model 3",
    rentalPeriod: "3 days",
    price: 300,
  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAdditionalServicesChange = (e) => {
    const { name, checked } = e.target;
    setAdditionalServices((prevServices) => ({
      ...prevServices,
      [name]: checked,
    }));
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmBooking = () => {
    alert("Booking Confirmed!");
  };

  const calculateTotalPrice = () => {
    let total = carDetails.price;
    if (additionalServices.gps) total += 10;
    if (additionalServices.childSeat) total += 5;
    if (additionalServices.additionalDriver) total += 15;
    total += total * 0.18; // GST 18%
    return total.toFixed(2);
  };

  return (
    <div className="booking-page">
      <h1>Booking Page</h1>
      <div className="grid-container">
        <div className="card">
          <h2>Personal Details</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={personalDetails.name}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={personalDetails.email}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={personalDetails.phone}
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <h2>Summary of Booking</h2>
          <p>Car: {carDetails.name}</p>
          <p>Rental Period: {carDetails.rentalPeriod}</p>
          <p>Total Price: ${carDetails.price}</p>
        </div>

        <div className="card">
          <h2>Additional Services</h2>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="gps"
                checked={additionalServices.gps}
                onChange={handleAdditionalServicesChange}
              />
              GPS Navigation ($10/day)
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="childSeat"
                checked={additionalServices.childSeat}
                onChange={handleAdditionalServicesChange}
              />
              Child Seat ($5/day)
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="additionalDriver"
                checked={additionalServices.additionalDriver}
                onChange={handleAdditionalServicesChange}
              />
              Additional Driver ($15/day)
            </label>
          </div>
          <h2>Payment Gateway</h2>
          <div className="form-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentDetailsChange}
            />
          </div>
          <div className="form-group">
            <label>Expiry Date:</label>
            <input
              type="text"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handlePaymentDetailsChange}
            />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handlePaymentDetailsChange}
            />
          </div>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
          <h2>Billing Summary</h2>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
