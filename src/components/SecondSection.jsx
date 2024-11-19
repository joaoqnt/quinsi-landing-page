import React from 'react'
import '../styles/FeatureSection.css';
import imageLearnig from '../assets/Innovation-bro.png'

function SecondSection() {
  return (
    <div className='first-section'>
      <a href="https://storyset.com/technology">
          <img src={imageLearnig} alt=""/>
        </a>
        <div className='text-first-section'>
          <h1>Personalize seu negócio com soluções rápidas e inovadoras</h1>
          <p>Transformamos sua ideia em realidade com agilidade, criando soluções sob medida para atender às necessidades do seu negócio.</p>
        </div>
    </div>
  )
}
export default SecondSection
