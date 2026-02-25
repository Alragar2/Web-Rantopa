import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <NavLink to="/">
            <h2>RanToPa</h2>
          </NavLink>
        </div>
        <div className="footer-nav">
          <h4>Navegación</h4>
          <ul>
            <li><NavLink to="/eventos">Eventos</NavLink></li>
            <li><NavLink to="/quienes-somos">Quiénes somos</NavLink></li>
            <li><NavLink to="/entradas">Entradas</NavLink></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p><a href="mailto:contacto@rantopa.com">contacto@rantopa.com</a></p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} RanToPa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;