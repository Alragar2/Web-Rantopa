import React from 'react';

const QuienesSomos = () => {
  return (
    <section className="quienes-somos-page">
      <div className="container">
        <h1>Quiénes Somos</h1>
        
        <div className="about-section">
          <h2>¿Qué es RanToPa?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>

        <div className="mission-section">
          <h2>Nuestra Misión</h2>
          <p>
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
          </p>
        </div>

        <div className="for-promoters-section">
          <h3>Para Promotores</h3>
          <p>
            Ofrecemos una plataforma para que puedas llegar a una audiencia más amplia y promocionar tus eventos de manera efectiva.
          </p>
        </div>

        <div className="for-public-section">
          <h3>Para el Público</h3>
          <p>
            Te ayudamos a descubrir los mejores eventos en tu ciudad, desde conciertos hasta exposiciones de arte.
          </p>
        </div>

        <div className="contact-section">
          <h2>Contacto</h2>
          <p>
            ¿Tienes alguna pregunta? No dudes en contactarnos en <a href="mailto:contacto@rantopa.com">contacto@rantopa.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
