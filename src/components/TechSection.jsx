import React from 'react';
import '../styles/TechSection.css';
import imageReact from '../assets/react-logo.png'
import imageFlutter from '../assets/flutter-logo.svg'
import imagePython from '../assets/python-logo.jpeg'
import imageJava from '../assets/java-logo.png'
import imageHtml from '../assets/html-logo.png'
import imageCss from '../assets/css-logo.png'
import imageJs from '../assets/js-logo.png'

function TechSection() {
  const techs = [
    { name: 'React', logo: imageReact},
    { name: 'Flutter', logo: imageFlutter },
    { name: 'Python', logo: imagePython },
    { name: 'Java', logo: imageJava },
    { name: 'Html', logo: imageHtml },
    { name: 'Css', logo: imageCss },
    { name: 'JavaScript', logo: imageJs },
    // Adicione outras tecnologias aqui
  ];

  return (
    <section className='feature-section'>
        <h2 className="feature-heading">NOSSOS CONHECIMENTOS</h2>
        <h1 className="feature-subheading">Tecnologias que utilizamos</h1>
        <div className="tech-section">
        
        {techs.map((tech, index) => (
            <div key={index} className="tech-card">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <p className="tech-name">{tech.name}</p>
            </div>
        ))}
        </div>
    </section>
  );
}

export default TechSection;
