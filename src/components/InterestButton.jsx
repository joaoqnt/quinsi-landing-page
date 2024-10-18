import React from 'react'
import '../styles/InterestButton.css'

function InterestButton() {
  const openWhatsApp = () => {
    const phoneNumber = '5534991520665'; // Substitua pelo número de telefone
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  return (
    <button class="interest-button" onClick={openWhatsApp}>ESTOU INTERESSADO</button>
  )
}

export default InterestButton