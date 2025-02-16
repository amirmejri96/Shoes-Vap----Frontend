import React from 'react'

const Sneaker = () => {
  return (
    <div className='shampo'>
        <div className='images'>
            <img src='' alt='Sneakers_Deo_1' />
            <img src='' alt='Sneakers_Deo_2' />
            <img src='' alt='Sneakers_Deo_3' />
        </div>

        <h2>Sneakers Deo Shoesvap</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Le Sneakers Deo Shoesvap est conçu pour neutraliser les mauvaises odeurs et apporter une fraîcheur durable à vos chaussures.
               Sa formule efficace élimine les bactéries responsables des odeurs désagréables et laisse un parfum agréable qui dure
                toute la journée. Facile à utiliser, il convient à tous types de chaussures (sneakers, baskets, chaussures de sport,
                 de ville et de travail).</p>
        </div>

        <div className='mode-emploi'>
            <h4>Mode d'emploi :</h4>
            <p>1.	Bien agiter le flacon avant utilisation. <br/>
               2.	Vaporiser l’intérieur de la chaussure à une distance de 15-20 cm. <br/>
               3.	Laisser sécher quelques minutes avant de porter les chaussures. <br/>
               4.	Utiliser quotidiennement pour une protection optimale contre les mauvaises odeurs.</p>
        </div>

        <div className='precaution'>
            <h4>Précaution :</h4>
            <p> ⚠️ Ne pas ingérer ni vaporiser directement sur la peau. <br/>
                ⚠️ Tenir hors de portée des enfants. <br/>
                ⚠️ Éviter tout contact avec les yeux. <br/>
                ⚠️ Conserver dans un endroit frais et sec, à l'abri de la chaleur.</p>
        </div>

        <h5>🛒 Gardez vos chaussures fraîches et agréables à porter avec le Sneakers Deo Shoesvap !</h5>

        <p>⇒ Quantité : 250ml</p>

        <div className='prix flex'>
            <p>Prix :</p>
            <p style={{textDecoration:'line-through'}}>20 TND</p>
            <p>15 TND</p>
        </div>

    </div>
  )
}

export default Sneaker