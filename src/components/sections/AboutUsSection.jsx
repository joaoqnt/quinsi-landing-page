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
                    <div className='divider'></div>
                    <div className='div-wrapper'>
                        <div className='content-wrapper'>
                            <p>
                                A Quinsi nasceu de um sonho compartilhado entre os sócios <b>João Pedro Soares</b> e <b>João Vitor Quintanilha</b>. Dois empreendedores apaixonados por tecnologia e inovação, que acreditam que o futuro das empresas está em como elas utilizam as ferramentas tecnológicas para transformar ideias em resultados.
                            </p>
                            <p>
                                Tudo começou com uma inquietação: por que muitas empresas encontram dificuldades para implementar soluções tecnológicas que realmente atendam às suas necessidades? Por que a tecnologia, que deveria simplificar, tantas vezes complica? Com essa visão, surgiu a Quinsi, um projeto que une propósito, criatividade e paixão por fazer a diferença.
                            </p>
                        </div>
                        <div className='image-section'>
                            <img src={image} alt='Sobre nós' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-mission'>
                <div className='section'>
                    <h1>Nossa missão</h1>
                    <div className='divider'></div>
                    <p>
                        Capacitar empresas e empreendedores a inovarem de forma simples, descomplicada e eficiente. Desenvolvemos soluções tecnológicas personalizadas que não apenas resolvem problemas, mas criam novas oportunidades de crescimento e excelência. Queremos fazer da tecnologia uma aliada acessível e transformadora, ajudando negócios a se destacarem no mercado por meio de ferramentas inteligentes, intuitivas e focadas no que realmente importa: <strong>RESULTADOS.</strong>
                    </p>
                    <div className='values-section'>
                        <div className='value-item'>
                            <i className='icon fa fa-check-circle'></i>
                            <p>
                                <strong>Simplicidade com impacto:</strong> Simplificar soluções, mas com visão em gerar grandes transformações.
                            </p>
                        </div>
                        <div className='value-item'>
                            <i className='icon fa fa-handshake'></i>
                            <p>
                                <strong>Colaboração:</strong> Trabalhamos lado a lado com nossos clientes, porque acreditamos que os melhores resultados vêm de uma visão compartilhada.
                            </p>
                        </div>
                        <div className='value-item'>
                            <i className='icon fa fa-lightbulb'></i>
                            <p>
                                <strong>Inovação constante:</strong> Buscamos sempre o novo, experimentamos, aprendemos e evoluímos a cada passo.
                            </p>
                        </div>
                        <div className='value-item'>
                            <i className='icon fa fa-trophy'></i>
                            <p>
                                <strong>Compromisso com resultados reais:</strong> Para nós, cada entrega é um marco, e cada solução deve trazer impacto direto ao negócio.
                            </p>
                        </div>
                        <div className='value-item'>
                            <i className='icon fa fa-balance-scale'></i>
                            <p>
                                <strong>Respeito e transparência:</strong> Valorizamos relações verdadeiras, baseadas na confiança e na clareza em cada etapa.
                            </p>
                        </div>
                    </div>
                    <ButtonTransparent buttonText="Transforme seus desafios em conquistas" textColor="rgb(66, 66, 66)" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
