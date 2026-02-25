import React from 'react';
import EventCard from './EventCard';
import { mockEvents } from '../../mock/data';
import '../../styles/events.css';

const EventsGrid = () => {
  return (
    <div className="events-grid">
      {mockEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsGrid;
