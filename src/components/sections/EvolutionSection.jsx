import React from 'react';
import '../../styles/sections/EvolutionSection.css';
import { FaBolt } from 'react-icons/fa';
import PriorityCard from '../cards/PriorityCard'

const EvolutionSection = () => {
    return (
        <div className="evolution-section">
            <h1>Quais as vantagens em ter a QUINSI como parceira?</h1>
            <div className="evolution-cards-grid">
                <div className="evolution-card">
                    <h1 className="evolution-text">50%</h1>
                    <p>De otimização do tempo de entrega</p>
                </div>
                <div className="evolution-card">
                    <h1 className="evolution-text">30%</h1>
                    <p>Redução nos custos operacionais</p>
                </div>
                <div className="evolution-card">
                    <h1 className="evolution-text">2x</h1>
                    <p>Mais satisfação dos seus clientes e colaboradores</p>
                </div>
            </div>
        </div>
    );
};

export default EvolutionSection;
