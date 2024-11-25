import React from "react";
import "../../styles/cards/MissionCard.css";

const CardMission = ({ icon, title, text }) => {
    return (
        <div className="card-mission">
            <div className="wrapper-icon">
                <div className="icon-title">{icon}</div>
            </div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

export default CardMission;