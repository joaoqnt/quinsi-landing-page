import React from 'react';
import '../../styles/buttons/ButtonTransparent.css'; // Importa os estilos
import arrowImage from '../../assets/arrow.png'; // Importa a imagem da seta

function ButtonTransparent({ buttonText, textColor }) {
  const openWhatsApp = () => {
    const phoneNumber = '5534991740481'; // Substitua pelo número de telefone
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="interest-container">
      <button
        className="interest-button-transparent"
        onClick={openWhatsApp}
        style={{ color: textColor }} // Define a cor do texto
      >
        {buttonText} {/* Define o texto do botão */}
      </button>
      <img className="arrow-image" src={arrowImage} alt="Seta apontando para o botão" />
    </div>
  );
}

export default ButtonTransparent;
