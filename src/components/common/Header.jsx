import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/buttons.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h1>RanToPa</h1>
          </NavLink>
        </div>
        <nav className="navigation">
          <ul>
            <li><NavLink to="/eventos">Eventos</NavLink></li>
            <li><NavLink to="/quienes-somos">Quiénes somos</NavLink></li>
            <li><NavLink to="/entradas">Entradas</NavLink></li>
          </ul>
        </nav>
        <div className="cta">
          <button className="btn btn-primary">Ver eventos</button>
        </div>
      </div>
    </header>
  );
};

export default Header;