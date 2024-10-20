// WhatsAppButton.js
import React from 'react';
import '../styles/WhatsAppButton.css';
import avatar from '../assets/avatar-3.png';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  const phoneNumber = '5534991520665';

  return (
    <FloatingWhatsApp 
      phoneNumber={phoneNumber} 
      accountName='Quinsi Soluções Tecnológicas' 
      avatar= {avatar}
      chatMessage='Olá! Venha desenvolver sua nova solução'
    />
  );
};

export default WhatsAppButton;
