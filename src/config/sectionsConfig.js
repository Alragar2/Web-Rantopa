const sectionsConfig = {
  hero: {
    title: "Bienvenido a Nuestra Landing Page",
    subtitle: "Descubre lo que ofrecemos",
    ctaText: "¡Comienza Ahora!",
    ctaLink: "#features",
    image: "/assets/images/hero-image.jpg", // Cambia la ruta según sea necesario
  },
  features: [
    {
      title: "Características 1",
      description: "Descripción de la característica 1.",
      icon: "fas fa-star", // Icono de Font Awesome
    },
    {
      title: "Características 2",
      description: "Descripción de la característica 2.",
      icon: "fas fa-check-circle", // Icono de Font Awesome
    },
    {
      title: "Características 3",
      description: "Descripción de la característica 3.",
      icon: "fas fa-thumbs-up", // Icono de Font Awesome
    },
  ],
  about: {
    title: "Sobre Nosotros",
    description: "Información sobre la empresa o el producto.",
  },
  pricing: [
    {
      plan: "Básico",
      price: "$10/mes",
      features: ["Característica 1", "Característica 2"],
    },
    {
      plan: "Pro",
      price: "$20/mes",
      features: ["Característica 1", "Característica 2", "Característica 3"],
    },
  ],
  testimonials: [
    {
      name: "Cliente Satisfecho",
      feedback: "Este producto cambió mi vida.",
    },
    {
      name: "Otro Cliente",
      feedback: "Excelente servicio y atención.",
    },
  ],
  gallery: [
    "/assets/images/gallery1.jpg",
    "/assets/images/gallery2.jpg",
    "/assets/images/gallery3.jpg",
  ],
  faq: [
    {
      question: "¿Pregunta frecuente 1?",
      answer: "Respuesta a la pregunta frecuente 1.",
    },
    {
      question: "¿Pregunta frecuente 2?",
      answer: "Respuesta a la pregunta frecuente 2.",
    },
  ],
  contact: {
    title: "Contáctanos",
    description: "Si tienes alguna pregunta, no dudes en contactarnos.",
  },
};

export default sectionsConfig;