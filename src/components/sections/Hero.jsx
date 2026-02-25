import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';


const Hero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://diarium.usal.es/bermejomejo/files/2015/11/mma.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  return (
    <section id="hero" className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1 className="hero-title">Donde viven los grandes eventos</h1>
        <p className="hero-description">Descubre los mejores eventos y compra tus entradas.</p>
        <Link to="/eventos">
            <button className="btn btn-primary">Ver eventos</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;