import React from 'react';
import '../../styles/buttons/EspecialistaButton.css'

function EspecialistaButton() {
    const openWhatsApp = () => {
        const phoneNumber = '5534991740481'; // Substitua pelo número de telefone
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
        <button className="especialista-button" onClick={openWhatsApp}>
            Fale com um especialista
        </button>
    );
}

export default EspecialistaButton;
