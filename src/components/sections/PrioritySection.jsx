import React from 'react';
import '../../styles/sections/PrioritySection.css'

const PrioritySection = () => {
    return (
        <div className='priority-section'>
            <h1>O que oferecemos?</h1>
            <div className='priority-cards-grid'>
                <div className='priority-box-app'>
                    <h1>Aplicativo</h1>
                    <p>Entrega do MVP em até 3 meses</p>
                    <a href="#mobile" class="button-more">Saiba mais</a>
                </div>
                <div className='priority-box-auto'>
                    <h1>Automação</h1>
                    <p>Otimização dos seus processos</p>
                    <a href="#desktop" class="button-more">Saiba mais</a>
                </div>
                <div className='priority-box-sistema'>
                    <h1>Sistema</h1>
                    <p>Entrega do MVP em até 3 meses</p>
                    <a href="#desktop" class="button-more">Saiba mais</a>
                </div>
            </div>
            {/* <h2>Desenvolvimento pensado em aperfeiçoar, automatizar e digitalizar operações e serviços.</h2>
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
            <InterestButton content='Tenho interesse'></InterestButton> */}
        </div>
    );
};

export default PrioritySection;