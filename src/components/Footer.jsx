import React from 'react';
import '../styles/Footer.css'; 
import logoBranca from '../assets/negativo-Branca.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoBranca} alt="Logo Quinsi" />
      </div>
      <div className='footer-info'>
        <h2>Quinsi - Soluções Tecnológicas</h2>
        <p>Telefone: <a href="tel:+5534991740481">+55 34 99174-0481</a></p>
        <p>Copyright © Quinsi. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
