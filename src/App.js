// src/App.js
// The main App component that acts as the container for all other components. 
// Use React Router for navigation between different sections of the app.
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RenderedCultureComponent from './renderer/components/CultureComponent';
import RenderedEventsComponent from './renderer/components/EventsComponent';
import RenderedLocalArchivesComponent from './renderer/components/LocalArchivesComponent';
import RenderedLocalBusinessComponent from './renderer/components/LocalBusinessComponent';
import RenderedNewsComponent from './renderer/components/NewsComponent';
import RenderedPublicServicesComponent from './renderer/components/PublicServicesComponent';
import RenderedTourismComponent from './renderer/components/TourismComponent';
import RenderedTransportComponent from './renderer/components/TransportComponent';
// Import Navbar if it's used across all routes
import Navbar from './components/Navbar';

function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <Navbar />
      {currentPath === '/culture' && <RenderedCultureComponent />}
      {currentPath === '/events' && <RenderedEventsComponent />}
      {currentPath === '/archives' && <RenderedLocalArchivesComponent />}
      {currentPath === '/business' && <RenderedLocalBusinessComponent />}
      {currentPath === '/news' && <RenderedNewsComponent />}
      {currentPath === '/public-services' && <RenderedPublicServicesComponent />}
      {currentPath === '/tourism' && <RenderedTourismComponent />}
      {currentPath === '/transport' && <RenderedTransportComponent />}
    </Router>
  );
}

export default App;
