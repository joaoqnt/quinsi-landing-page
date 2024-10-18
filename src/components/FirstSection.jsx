import React from 'react'
import '../styles/FirstSection.css'
import imageLearnig from '../assets/Learning-bro.png'
import InterestButton from './InterestButton'

function FirstSection() {
  return (
    <div className='first-section'>
        <div className='text-first-section'>
          <h1>Transforme seu Negócio com Inovação Tecnológica</h1>
          <p>De ideias a código, transformamos sua visão em realidade, sem complicações. Agilidade e expertise para levar seu projeto do papel ao digital.</p>
          <InterestButton></InterestButton>
        </div>
        <img src={imageLearnig} alt=""/>
      </div>
  )
}

export default FirstSection