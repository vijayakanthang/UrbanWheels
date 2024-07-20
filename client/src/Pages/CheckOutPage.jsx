import React from 'react';
import '../stylesheet/CheckOutPage.css';

const CheckOutPage = ({ bookingDetails }) => {
  const {
    name,
    email,
    phone,
    carName,
    carModel,
    rentAmount,
    withDriver,
    gstRate
  } = bookingDetails;

  const gstAmount = (rentAmount * gstRate) / 100;
  const totalAmount = rentAmount + gstAmount;

  return (
    <div className="invoice-container">
      <h1>Invoice</h1>
      <div className="invoice-section">
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
      <div className="invoice-section">
        <h2>Car Details</h2>
        <p><strong>Car Name:</strong> {carName}</p>
        <p><strong>Car Model:</strong> {carModel}</p>
        <p><strong>Rent Amount:</strong> ${rentAmount.toFixed(2)}</p>
        <p><strong>With Driver:</strong> {withDriver ? 'Yes' : 'No'}</p>
      </div>
      <div className="invoice-section">
        <h2>Billing Summary</h2>
        <p><strong>GST ({gstRate}%):</strong> ${gstAmount.toFixed(2)}</p>
        <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p>
      </div>
      <button onClick={() => window.print()}>Print Invoice</button>
    </div>
  );
};

CheckOutPage.defaultProps = {
  bookingDetails: {
    name: '',
    email: '',
    phone: '',
    carName: '',
    carModel: '',
    rentAmount: 0,
    withDriver: false,
    gstRate: 0,
  },
};

export default CheckOutPage;
