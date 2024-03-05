// src/components/EventsComponent.js
import React, { useEffect, useState } from 'react';
// Assuming you have a function to fetch events data from an API
import { fetchEvents } from '../api/eventsAPI';

const EventsComponent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const eventData = await fetchEvents();
        setEvents(eventData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch events');
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{event.title}</h5>
              <p className="mb-3 font-normal text-gray-700">{event.description}</p>
              <span className="text-sm text-gray-600">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
