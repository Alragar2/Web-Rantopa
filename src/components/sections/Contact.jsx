import React from 'react';
import ContactForm from '../forms/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;