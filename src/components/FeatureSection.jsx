import React from 'react';
import { FaMobileAlt, FaLaptop, FaServer, FaCode, FaRobot } from 'react-icons/fa';
import '../styles/FeatureSection.css';
import { FaEarthAmericas } from 'react-icons/fa6';
import Card from "./CardFeature";

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
      <div className='feature-grid'>
        <Card
          icon={<FaRobot />}
          title="Automação"
          text="Automatize o atendimento, garantindo respostas rápidas, personalizadas e disponíveis 24/7."
        />
        <Card
          icon={<FaMobileAlt />}
          title="Aplicativos"
          text="Desenvolva aplicativos personalizados que conectem sua marca aos clientes, entregando inovação e praticidade na palma da mão."
        />
        <Card
          icon={<FaLaptop />}
          title="Sistemas"
          text="Implante sistemas robustos e eficientes, otimizando a gestão do seu negócio e impulsionando resultados com tecnologia de ponta."
        />
    </div>
    </section>
  );
};

export default FeatureSection;
