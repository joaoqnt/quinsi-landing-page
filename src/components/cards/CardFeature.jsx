import React from "react";
import "../../styles/cards/FeatureCard.css";
import InterestButton from '../buttons/InterestButton'

const CardFeature = ({ icon, title, text }) => {
  return (
    <div className="card">
      <div className="icon-wrapper">
        <div className="icon">{icon}</div>
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
      <div className="card-button-wrapper">
        <InterestButton content="Entrar em contato"></InterestButton>
      </div>
    </div>
  );
};

export default CardFeature;