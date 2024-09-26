// Import React and the TicketTable component
import React from 'react';
import TicketTable from './components/TicketTable';

// Main component that renders the page
function App() {
  return (
    <div className="App">
      <h1>Ticket Price Comparison</h1>  {/* Page Title */}
      <TicketTable />  {/* Render the ticket table component */}
    </div>
  );
}

export default App;  // Export the App component so it can be used in other parts of the application