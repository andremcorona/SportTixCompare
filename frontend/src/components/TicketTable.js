// Import React and necessary hooks for state and effect
import React, { useState, useEffect } from 'react';

function TicketTable() {
  // Initialize the 'tickets' state with an empty array
  const [tickets, setTickets] = useState([]);

  // useEffect hook to fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('/get_tickets')  // Send a GET request to the Flask API
      .then(response => response.json())  // Parse the JSON response
      .then(data => setTickets(data));    // Update the 'tickets' state with the fetched data
  }, []);  // Empty dependency array ensures this only runs once when the component mounts

  return (
    <table>  {/* Create a table to display the ticket data */}
      <thead>
        <tr>
          <th>Event</th>    {/* Column header for event name */}
          <th>Price</th>    {/* Column header for ticket price */}
          <th>Platform</th> {/* Column header for the platform (StubHub, Ticketmaster, etc.) */}
        </tr>
      </thead>
      <tbody>
        {/* Loop through the tickets array and render a row for each ticket */}
        {tickets.map(ticket => (
          <tr key={ticket.event}>  {/* Use event name as the key for each row */}
            <td>{ticket.event}</td>  {/* Display event name */}
            <td>{ticket.price}</td>  {/* Display ticket price */}
            <td>{ticket.platform}</td>  {/* Display the ticket platform */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TicketTable;  // Export the component to be used in other parts of the app