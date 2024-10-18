import React from 'react';
import { FaMobileAlt, FaLaptop, FaServer, FaCode } from 'react-icons/fa';
import '../styles/FeatureSection.css';
import { FaEarthAmericas } from 'react-icons/fa6';

const features = [
  { id: 1, title: "Aplicativos", description: "Desenvolvemos aplicativos personalizados que atendem às suas necessidades específicas.", icon: <FaMobileAlt /> },
  { id: 2, title: "Sites", description: "Landing-pages, e-commerce ou sites personalizados que se adequam ao seu negócio.", icon: <FaEarthAmericas /> },
  { id: 3, title: "Sistemas", description: "Soluções completas e robustas para gerenciar seu negócio de forma eficiente.", icon: <FaCode /> }
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-heading">NOSSOS SERVIÇOS</h2>
      <h1 className="feature-subheading">O que podemos fazer por você</h1>
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="icon">
              {feature.icon}
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
