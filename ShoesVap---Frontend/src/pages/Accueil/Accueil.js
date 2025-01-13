import React, { useRef } from 'react';
import './AccueilStyle.css';

const Accueil = () => {
  const videoRef = useRef(null);

  return (
    <div className='main-accueil'>
      <header>
        <h1>Bienvenue à ShoesVap</h1>
        <h4 style={{ fontSize: '2em', fontFamily: 'sans-serif', fontWeight: '300', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Service de nettoyage à la vapeur professionnel
        </h4>
        <h3>وين النظافة تولي فن</h3>
      </header>
      <div className="video-container">
        <video
          ref={videoRef}
          src='/assets/vidéo.mp4'
          title='ShoesVap'
          controls
          autoPlay
          loop
          muted
          style={{ width: '100%', borderRadius: '8px' }}
        ></video>
      </div>
    </div>
  );
};

export default Accueil;
