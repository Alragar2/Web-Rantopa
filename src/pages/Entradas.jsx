import React from 'react';
import { mockEvents } from '../mock/data';
import Button from '../components/common/Button';

const Entradas = () => {
  return (
    <section className="entradas-page">
      <div className="container">
        <h1>Entradas</h1>
        <p>
          Compra tus entradas de forma segura a través de nuestro partner oficial, Ticketmaster.
          Serás redirigido a su sitio web para completar la compra.
        </p>
        <a href="https://www.ticketmaster.es" target="_blank" rel="noopener noreferrer" style={{ marginBottom: 'var(--spacing-xl)', display: 'inline-block' }}>
          <Button label="Ir a Ticketmaster" className="btn-primary btn-large" />
        </a>

        <div className="event-list">
          <h2>Eventos con entradas disponibles</h2>
          {mockEvents.map(event => (
            <div key={event.id} className="event-list-item">
              <h3>{event.name}</h3>
              <a href="https://www.ticketmaster.es" target="_blank" rel="noopener noreferrer">
                <Button label="Comprar entrada" className="btn-secondary" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entradas;
