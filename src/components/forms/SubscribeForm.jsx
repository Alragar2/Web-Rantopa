import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo a tu servidor o servicio de suscripción
    setIsSubmitted(true);
  };

  return (
    <div className="subscribe-form">
      {isSubmitted ? (
        <p>¡Gracias por suscribirte!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Suscríbete a nuestro boletín:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Introduce tu correo electrónico"
          />
          <button type="submit">Suscribirse</button>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;