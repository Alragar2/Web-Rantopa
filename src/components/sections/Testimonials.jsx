import React from 'react';

const testimonials = [
  {
    name: "Juan Pérez",
    feedback: "La mejor experiencia que he tenido. ¡Altamente recomendado!",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "María López",
    feedback: "Un servicio excepcional y un equipo muy profesional.",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Carlos García",
    feedback: "Excelente servicio y atención al cliente.",
    image: "/images/testimonial3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;