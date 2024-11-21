import React from 'react';
import '../../styles/cards/PriorityCard.css'; // Importe o CSS para este componente

// Componente que recebe título e conteúdo como props
const PriorityCard = ({ title, content }) => {
    return (
        <div className="priority-card">
            <div className="priority-info">
                <span className="arrow">&#8594;</span>
                <h1>{title}</h1>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default PriorityCard;
