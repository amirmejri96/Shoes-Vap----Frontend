import React from 'react'
import './AccueilStyle.css'

const Accueil = () => {
  return (
    <div className='main-accueil'>
      <header>
    <h1>Bienvenue à <br /> Shoes Vap</h1>
    <h4 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#2d3852', textShadow:'2px 2px 4px rgba(250, 250, 250, 0.5)' }}>
        Service de nettoyage à la vapeur professionnel
    </h4>
    <h3>Le soin parfait pour vos chaussures !</h3>
</header>
    <div className="video-container">
        <video controls>
            <source src="video/vapshoes.mp4" type="video/mp4"/>
            Votre navigateur ne supporte pas la lecture des vidéos.
        </video>
    </div>
        
    </div>
  )
}

export default Accueil