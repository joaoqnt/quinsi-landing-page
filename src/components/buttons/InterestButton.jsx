import React from 'react';
import '../../styles/buttons/InterestButton.css'

function InterestButton({ content }) {
    const openWhatsApp = () => {
        const phoneNumber = '5534991740481'; // Substitua pelo número de telefone
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
        <button className="interest-button" onClick={openWhatsApp}>
            {content}
        </button>
    );
}

export default InterestButton;
