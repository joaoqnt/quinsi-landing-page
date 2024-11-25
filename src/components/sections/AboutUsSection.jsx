import React from 'react';
import '../../styles/sections/AboutUsSection.css';
import ButtonTransparent from '../buttons/ButtonTransparent'
import image from '../../assets/Innovation-bro.png'

const AboutUsSection = () => {
    return (
        <div>
            <div className='about-us-section'>
                <div className='section'>
                    <h1>Quem somos?</h1>
                    <div className='div-wrapper'>
                        <div className='content-wrapper'>
                            <p>
                                A Quinsi nasceu de um sonho compartilhado entre os sócios <b>João Pedro Soares</b> e <b>João Vitor Quintanilha</b>. Dois empreendedores apaixonados por tecnologia e inovação, que acreditam que o futuro das empresas está em como elas utilizam as ferramentas tecnológicas para transformar ideias em resultados.
                            </p>
                            <p>
                                Tudo começou com uma inquietação: por que muitas empresas encontram dificuldades para implementar soluções tecnológicas que realmente atendam às suas necessidades? Por que a tecnologia, que deveria simplificar, tantas vezes complica? Com essa visão, surgiu a Quinsi, um projeto que une propósito, criatividade e paixão por fazer a diferença.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUsSection;
