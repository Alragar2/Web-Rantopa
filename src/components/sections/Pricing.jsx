import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Pro',
      price: '$20/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'Enterprise',
      price: '$30/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;