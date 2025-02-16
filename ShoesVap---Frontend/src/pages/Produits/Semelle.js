import React from 'react'
import './ProduitStyle.css'

const semelle = () => {
  return (
    <div className='shampo'>
        <div className='images'>
            <img src='../../../assets/semelle.jpg' alt='Semelles_1' />
        </div>

        <h2>Semelles Orthopédiques</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Offrez à vos pieds un maintien optimal et un confort inégalé avec nos semelles orthopédiques.
               Conçues pour soulager la fatigue et corriger la posture,
                elles s’adaptent parfaitement à toutes vos chaussures pour un bien-être au quotidien.</p>
        </div>

        <div className='mode-emploi'>
            <h4> Les avantages :</h4>
            <p>1. Soutien ergonomique : Réduit la pression et favorise un bon alignement du pied. <br/>
               2. Amorti renforcé : Absorbe les chocs et soulage les douleurs plantaires. <br/>
               3. Matériaux respirants : Limite la transpiration et assure une sensation de fraîcheur. <br/>
               4. Adaptabilité universelle : Convient aux baskets, chaussures de ville et de sport.</p>
        </div>

        <h5>🛒 Prenez soin de vos pieds dès aujourd'hui !</h5>

        <p>⇒ Couleur disponible : Noir / Blanc </p>

        <div className='prix flex'>
            <p>Prix :</p>
            <p style={{textDecoration:'line-through'}}>20 TND</p>
            <p>15 TND</p>
        </div>

        <div className='commander'>
          <button><a href='https://wa.me/21657244160'>Commander</a></button>
        </div>

    </div>
  )
}

export default semelle