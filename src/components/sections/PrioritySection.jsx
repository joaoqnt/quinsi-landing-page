import React from 'react';
import '../../styles/sections/PrioritySection.css'
import PriorityCard from '../cards/PriorityCard'
import InterestButton from '../buttons/InterestButton';

const PrioritySection = () => {
    return (
        <div className='priority-section'>
            <h1>O que priorizamos em cada Projeto?</h1>
            <h2>Desenvolvimento pensado em aperfeiçoar, automatizar e digitalizar operações e serviços.</h2>
            <div className="priority-cards-grid">
                <PriorityCard
                    title="Eficiência"
                    content="Soluções inteligentes que maximizam a produtividade e otimizam cada processo."
                />
                <PriorityCard
                    title="Inovação"
                    content="Tecnologia de ponta para transformar ideias criativas em soluções reais."
                />
                <PriorityCard
                    title="Design"
                    content="Experiências visuais envolventes e alinhadas à identidade única de sua marca."
                />
                <PriorityCard
                    title="Escalabilidade"
                    content="Cresça sem limites com soluções flexíveis e prontas para se adaptar às suas necessidades futuras."
                />
            </div>
            <InterestButton content='Tenho interesse'></InterestButton>
        </div>
    );
};

export default PrioritySection;