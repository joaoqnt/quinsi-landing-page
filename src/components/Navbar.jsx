import React from 'react';
import '../styles/Navbar.css'; // Crie um arquivo CSS para o estilo da navbar
import logo from '../assets/quinsi-logo.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Quinsi Logo" className="navbar-logo" />
        </div>
    );
}

export default Navbar;
