import React from 'react';
import { useParams } from 'react-router-dom';
import { mockEvents } from '../mock/data';
import Button from '../components/common/Button';

const DetalleEvento = () => {
  const { id } = useParams();
  const event = mockEvents.find(e => e.id === parseInt(id));

  if (!event) {
    return <div>Evento no encontrado</div>;
  }

  const { name, date, location, image, description, promoter } = event;

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
  };

  return (
    <div className="detalle-evento-page">
      <section className="event-hero" style={heroStyle}>
        <h1>{name}</h1>
      </section>
      <section className="event-details container">
        <h2>{name}</h2>
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Ubicación:</strong> {location}</p>
        <p><strong>Promotor:</strong> {promoter}</p>
        <p>{description}</p>
        <a href="https://www.ticketmaster.es" target="_blank" rel="noopener noreferrer">
          <Button label="Comprar entrada" className="btn-primary btn-large" />
        </a>
      </section>
    </div>
  );
};

export default DetalleEvento;
