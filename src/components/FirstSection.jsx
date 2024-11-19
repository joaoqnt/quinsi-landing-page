import React from 'react'
import '../styles/FirstSection.css'
import imageLearnig from '../assets/Programming-bro.png'
import InterestButton from './InterestButton'

function FirstSection() {
  return (
    <div className='first-section'>
        <div className='text-first-section'>
          <h1>Transforme seu negócio com inovação Tecnológica</h1>
          <p>De ideias a código, transformamos sua visão em realidade, sem complicações. Agilidade e expertise para levar seu projeto do papel ao digital.</p>
          <InterestButton></InterestButton>
        </div>
        <a href="https://storyset.com/web">
          <img src={imageLearnig} alt=""/>
        </a>
    </div>
  )
}

export default FirstSection