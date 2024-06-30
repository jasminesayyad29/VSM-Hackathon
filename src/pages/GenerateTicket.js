import React from 'react';
import './Ticket.css';
console.log("I am in  GEnerate Ticket")

const GenerateTicket = ({ name, totalVisitors, visitDate }) => {
  return (

    <div className="ticket">
      <h3>Booking Confirmation</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Total Visitors:</strong> {totalVisitors}</p>
      <p><strong>Date of Visit:</strong> {visitDate}</p>
    </div>

  );
};

export default GenerateTicket;