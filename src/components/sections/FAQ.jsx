import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuál es el horario de las clases?",
      answer: "Las clases se llevan a cabo de lunes a viernes, de 17:00 a 20:00 horas."
    },
    {
      question: "¿Qué edades aceptan?",
      answer: "Aceptamos niños y jóvenes de 6 a 18 años."
    },
    {
      question: "¿Se necesita experiencia previa?",
      answer: "No, nuestras clases están diseñadas para todos los niveles, desde principiantes hasta avanzados."
    },
    {
      question: "¿Ofrecen clases particulares?",
      answer: "Sí, ofrecemos clases particulares bajo solicitud."
    },
    {
      question: "¿Cuál es el costo de la inscripción?",
      answer: "La inscripción tiene un costo de 50 euros, que se abona una sola vez."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;