import React from 'react'
import '../styles/FeatureSection.css';
import { AiFillCaretRight } from 'react-icons/ai';

function SecondSection() {
  return (
    <section className="feature-section">
      <h2 className="feature-heading">NOSSOS MÉTODOS</h2>
      <h1 className="feature-subheading">O que priorizamos para você</h1>
      <div className="priorities">
        <div className='row-title'>
          <AiFillCaretRight className="icon-arrow" />
          <h3>Compromisso com Qualidade e Eficiência</h3>
        </div>
        <p>Todos os nossos produtos passam por rigorosos testes de qualidade e são otimizados para um desempenho eficiente. Com nossa abordagem orientada a resultados, você tem a garantia de soluções que fazem a diferença.</p>

        <div className='row-title'>
          <AiFillCaretRight className="icon-arrow" />
          <h3>Soluções Personalizadas para Você</h3>
        </div>
        <p>Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades e adaptar nossas soluções. Cada projeto é desenvolvido de forma flexível e personalizada para assegurar que seu software seja exatamente o que você precisa.</p>

        <div className='row-title'>
          <AiFillCaretRight className="icon-arrow" />
          <h3>Agilidade para Vencer o Tempo</h3>
        </div>
        <p>Sabemos que, no mundo dos negócios, tempo é essencial. Por isso, nossos processos são projetados para entregar resultados de forma rápida e eficiente, sem comprometer a qualidade.</p>
      </div>
    </section>

  )
}

export default SecondSection