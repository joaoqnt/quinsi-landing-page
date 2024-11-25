import React from 'react';
import '../../styles/sections/MobileSection.css'
import image from '../../assets/mobile_foto.png'
import EspecialistaButton from '../buttons/EspecialistaButton';

const MobileSection = () => {
    return (
        <div className='mobile-section' id='mobile'>
            <div className='box-mobile'>
                <h1>Aplicativos</h1>
                <div className='box-text-mobile'>
                    <p>Um aplicativo personalizado é desenvolvido com foco nas necessidades e objetivos específicos da sua empresa. Diferentemente de soluções genéricas, ele pode incluir funcionalidades que atendam diretamente ao seu público-alvo e processos internos, como integração com sistemas já existentes, automação de tarefas e ferramentas exclusivas.</p>
                    <p>Ter uma solução única dá à empresa um diferencial significativo. Com um aplicativo alinhado à identidade da marca e às demandas do mercado, é possível se destacar da concorrência, oferecendo um serviço mais completo e adaptado.</p>
                    <p>Embora o desenvolvimento inicial de um aplicativo personalizado possa ser maior em comparação com soluções prontas, a economia a longo prazo compensa. Com menos dependência de assinaturas de terceiros e suporte focado nas necessidades da empresa, o custo-benefício é evidente.</p>
                </div>
                <EspecialistaButton></EspecialistaButton>
            </div>
            <div className='box-image'>
                <img src={image} alt='Desenvolvimento mobile' />
            </div>
        </div>
    );
};

export default MobileSection;