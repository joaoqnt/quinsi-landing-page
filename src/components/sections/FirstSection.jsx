import React from 'react';
import '../../styles/sections/FirstSection.css';
import image from '../../assets/Innovation-bro.png'
import ButtonTransparent from '../buttons/ButtonTransparent';
import EspecialistaButton from '../buttons/EspecialistaButton';

function FirstSection() {
  return (
    <div className="first-section">
      <div className='div-image bouncing'>
        <img src={image} alt='Sobre nós' />
      </div>
      <div className="box-main-text bouncing">
        <h1 className="main-text">
          Tecnologia descomplicada, Soluções personalizadas.
          <span className="quinsi-text"> A QUINSI otimiza tudo.</span>
        </h1>
        <EspecialistaButton></EspecialistaButton>
      </div>

      {/* <ButtonTransparent buttonText="Bora começar?" textColor="white" /> */}
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
