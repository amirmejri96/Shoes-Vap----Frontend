import React from 'react'
import './ProduitStyle.css'

const lacets = () => {
  return (
    <div className='shampo'>
        <div className='images-pack'>
            <img src='../../../assets/lacets-blanc.jpg' alt='Lacets_1' />
            <img src='../../../assets/lacets-bleu-marine.jpg' alt='Lacets_2' />
            <img src='../../../assets/lacets-noire.jpg' alt='Lacets_3' />
        </div>

        <h2>Lacets en Coton 1M</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Redonnez vie à vos chaussures avec nos lacets en coton haut de gamme.
               Conçus pour offrir une excellente résistance à l’usure, ils garantissent un maintien optimal et un look raffiné.
                Leur tressage soigné assure une grande durabilité, tandis que leur texture douce préserve le confort à chaque pas.</p>
        </div>

        <div className='mode-emploi'>
            <h4> Les avantages :</h4>
            <p>1. Matériau premium : 100% coton de haute qualité pour une souplesse et une solidité accrues. <br/>
               2. Longueur idéale (1m) : Parfait pour sneakers, chaussures de ville et casual. <br/>
               3. Tressage renforcé : Résistance aux frottements et à l'effilochage. <br/>
               4. Finitions impeccables : Embouts solides pour un laçage facile et durable.</p>
        </div>

        <h5>🛒 Ajoutez une touche de sophistication à vos chaussures dès maintenant !</h5>

        <p>⇒ Couleur disponible : Bleu marine / Noir / Blanc / Gris</p>

        <div className='prix flex'>
            <p>Prix :</p>
            <p style={{textDecoration:'line-through'}}>8 TND</p>
            <p>6 TND</p>
        </div>

    </div>
  )
}

export default lacets