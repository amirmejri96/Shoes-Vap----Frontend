import React from 'react'
import './ProduitStyle.css'

const Foam = () => {
  return (
    <div className='shampo'>
        <div className='images'>
            <img src='' alt='Foam_1' />
            <img src='' alt='Foam_2' />
            <img src='' alt='Foam_3' />
        </div>

        <h2>Foam Shoesvap</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Foam Shoesvap est une mousse nettoyante pratique, idéale pour un entretien quotidien de vos chaussures.
                 Sa formule auto-séchante permet un nettoyage rapide sans rinçage,
                  tout en laissant une magnifique odeur fraîche qui dure longtemps.
                  Elle est spécialement conçue pour nettoyer efficacement sans abîmer les matériaux comme le cuir,
                   le daim et les tissus techniques.</p>
        </div>

        <div className='mode-emploi'>
            <h4>Mode d'emploi :</h4>
            <p>1. Secouez le flacon avant usage. <br/>
               2. Appliquez la mousse directement sur la chaussure ou sur une brosse douce. <br/>
               3. Nettoyez en effectuant des mouvements circulaires. <br/>
               4. Essuyez avec une serviette microfibre propre. <br/>
               5. Laissez sécher naturellement – pas besoin de rinçage grâce à son effet auto-séchage.</p>
        </div>

        <div className='precaution'>
            <h4>Précaution :</h4>
            <p>⚠️ Testez sur une petite zone avant utilisation. <br/>
               ⚠️ Ne pas appliquer sur des surfaces trop fragiles sans tester au préalable. <br/>
               ⚠️ Conserver à l'abri de la lumière et de la chaleur.</p>
        </div>

        <h5>🛒 Avec Foam Shoesvap, nettoyez vos chaussures en un instant, sans effort et avec une fraîcheur durable !</h5>

        <p>⇒ Quantité : 150ml</p>

        <div className='prix flex'>
            <p>Prix :</p>
            <p style={{textDecoration:'line-through'}}>20 TND</p>
            <p>15 TND</p>
        </div>

    </div>
  )
}

export default Foam