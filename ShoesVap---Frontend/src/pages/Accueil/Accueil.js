import React from 'react';
import './AccueilStyle.css';

const Accueil = () => {
  return (
    <div className='main-accueil'>
      <header>
        <h1>Bienvenue à ShoesVap</h1>
        <h4 style={{ fontSize:'2em', fontFamily: 'sans-serif', fontWeight: '300', color: 'white', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Service de nettoyage à la vapeur professionnel
        </h4>
        <h3>La solution parfaite pour vos chaussures !</h3>
      </header>
      <div className="video-container">
        <iframe title="Shoes Vap Video"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshoesvap2025%2Fvideos%2F2789068534596976%2F&show_text=false&width=267&t=0" 
          width="100%" 
          height="476"
          style={{ border: 'none', overflow: 'hidden' }} 
          scrolling="no" 
          frameBorder="0" 
          allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </div>
    </div>
  );
};

export default Accueil;