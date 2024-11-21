import React from 'react';
import '../../styles/sections/FirstSection.css';
import ButtonTransparent from '../buttons/ButtonTransparent';

function FirstSection() {
  return (
    <div className="first-section">
      <h1 className="main-text">
        TECNOLOGIA DESCOMPLICADA,
      </h1>
      <h1 className="main-text-lower">
        SOLUÇÕES PERSONALIZADAS
      </h1>
      <ButtonTransparent buttonText="Bora começar?" textColor="white" />
      {/* Comentários de conteúdo extra
        <div className='text-first-section'>
          <h1>Transforme seu negócio com inovação Tecnológica</h1>
          <p>De ideias a código, transformamos sua visão em realidade, sem complicações. Agilidade e expertise para levar seu projeto do papel ao digital.</p>
          <InterestButton></InterestButton>
        </div>
        <a href="https://storyset.com/web">
          <img src={imageLearnig} alt=""/>
        </a>
      */}
    </div>
  );
}

export default FirstSection;
