import React, { useState } from 'react';
import './NavbarStyle.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img style={{width:'70px'}} src='../../assets/logo.jpg' alt='Logo' />
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li><a href="/">Accueil</a></li>
                <li><a href="/à-propos">À propos</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/boutique">Boutique</a></li>
            </ul>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;