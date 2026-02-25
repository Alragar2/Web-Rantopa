import React from 'react';
import EventsGrid from '../components/events/EventsGrid';

const Eventos = () => {
  return (
    <section className="eventos-page">
      <div className="container">
        <h1>Todos los Eventos</h1>
        <EventsGrid />
      </div>
    </section>
  );
};

export default Eventos;
