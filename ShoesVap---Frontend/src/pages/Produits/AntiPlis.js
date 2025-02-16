import React from 'react'
import './ProduitStyle.css'

const AntiPlis = () => {
  return (
    <div className='shampo'>
        <div className='images-pack'>
            <img src='../../../assets/anti-plis.jpg' alt='Anti plis_1' />
            <img src='../../../assets/anti-plis-noire.jpg' alt='Anti plis_2' />
        </div>

        <h2>Anti-Plis pour Chaussures</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Protégez vos chaussures préférées avec nos anti-plis innovants !
                 Conçus pour prévenir les plis inesthétiques sur l'avant de vos sneakers,
                  nos protège-plis assurent une tenue impeccable tout en offrant un confort optimal.</p>
        </div>

        <div className='mode-emploi'>
            <h4> Les avantages :</h4>
            <p>1. Adaptable à toutes les tailles et formes de chaussures. <br/>
               2. Confortable et discret - se glisse sans gêne à l'intérieur. <br/>
               3. Matériaux résistants pour une durabilité maximale. <br/>
               4. Idéal pour sneakers, baskets et chaussures de ville.</p>
        </div>

        <h5>🛒 Ne laissez plus les plis gâcher votre style ! Commandez dès maintenant et offrez une longévité incomparable à vos chaussures !</h5>

        <p>⇒ Couleur disponible : Noir / Blanc</p>

        <div className='prix flex'>
            <p>Prix :</p>
            <p style={{textDecoration:'line-through'}}>15 TND</p>
            <p>12 TND</p>
        </div>

    </div>
  )
}

export default AntiPlis