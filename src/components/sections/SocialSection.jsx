import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import '../../styles/sections/socialsection.css';

const SocialSection = () => {
  return (
    <section className="social-section">
      <div className="container">
        <h2 className="section-title">Síguenos en Redes Sociales</h2>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaXTwitter />
            <span>Twitter</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
