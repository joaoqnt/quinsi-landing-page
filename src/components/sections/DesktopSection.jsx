import React from 'react';
import '../../styles/sections/MobileSection.css'
import image from '../../assets/desktop_foto.png'
import EspecialistaButton from '../buttons/EspecialistaButton';

const DesktopSection = () => {
    return (
        <div className='desktop-section' id='desktop'>
            <div className='box-image'>
                <img src={image} alt='Desenvolvimento mobile' />
            </div>
            <div className='box-mobile'>
                <h1>Sistemas</h1>
                <div className='box-text-mobile'>
                    <p>Sistemas personalizados permitem que a empresa tenha maior controle sobre o seu funcionamento, com a possibilidade de fazer ajustes conforme necessário. Em soluções prontas, há limitações de personalização, mas um sistema desenvolvido sob medida oferece flexibilidade para adaptar-se às mudanças nos requisitos de negócios ao longo do tempo.</p>
                    <p>Um sistema personalizado pode ser projetado para integrar-se perfeitamente com outros sistemas já em uso na empresa, como CRM, ERP ou bancos de dados, garantindo um fluxo de dados contínuo e eficiente entre diferentes ferramentas e plataformas, sem a necessidade de trabalho manual ou redundante.</p>
                    <p>Em resumo, investir no desenvolvimento de um sistema personalizado oferece muitas vantagens, como maior controle, flexibilidade, eficiência e uma forte vantagem competitiva. Embora o custo inicial de desenvolvimento possa ser mais alto, os benefícios a longo prazo e a possibilidade de crescimento contínuo e ajustado ao negócio tornam essa opção uma escolha inteligente para muitas empresas.</p>
                </div>
                <EspecialistaButton></EspecialistaButton>
            </div>
        </div>
    );
};

export default DesktopSection;