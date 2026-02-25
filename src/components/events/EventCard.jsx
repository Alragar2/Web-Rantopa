import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './EventCard.css';

const EventCard = ({ event }) => {
  const { id, name, date, location, image } = event;

  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-card-image" />
      <div className="event-card-content">
        <h3 className="event-card-title">{name}</h3>
        <p className="event-card-date">{date}</p>
        <p className="event-card-location">{location}</p>
        <Link to={`/eventos/${id}`}>
          <button className="btn btn-secondary">Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
