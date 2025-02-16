import React from 'react'

const Renew = () => {
  return (
    <div className='shampo'>
        <div className='images'>
            <img src='../../../assets/WHITE.jpg' alt='White_Renew_1' />
            {/* <img src='' alt='White_Renew_2' />
            <img src='' alt='White_Renew_3' /> */}
        </div>

        <h2>White Renew Shoesvap</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Le White Renew Shoesvap est conçu pour dégriser et blanchir les semelles jaunies, en redonnant éclat et propreté à vos chaussures.
               Sa formule avancée agit efficacement sur les matières en caoutchouc et plastique, garantissant un résultat durable et homogène.
                Facile à appliquer avec le pinceau, il agit efficacement après 1 heure d'exposition au soleil.</p>
        </div>

        <div className='mode-emploi'>
            <h4>Mode d'emploi :</h4>
            <p>1.	Protégez vos mains en portant des gants de protection. <br/>
               2.	Appliquez une fine couche de White Renew sur la semelle avec le pinceau. <br/>
               3.	Insérez les chaussures dans le sac plastique pour un traitement optimal. <br/>
               4.	Laissez agir sous le soleil pendant 1 heure pour un effet blanchissant optimal. <br/>
               5.	Essuyez l'excédent avec une serviette microfibre propre. <br/>
               6.	Répétez l'opération si nécessaire pour un blanc encore plus éclatant.</p>
        </div>

        <div className='precaution'>
            <h4>Précaution :</h4>
            <p>⚠️ Conserver à l’abri de la lumière et de la chaleur. <br/>
               ⚠️ Ne pas appliquer sur les parties en gomme. <br/>
               ⚠️ Éviter tout contact avec la peau et les yeux. <br/>
               ⚠️ Utiliser dans un endroit bien ventilé. <br/>
               ⚠️ Tenir hors de portée des enfants.</p>
        </div>

        <h5>🛒 Retrouvez des semelles éclatantes avec White Renew Shoesvap !</h5>

        <p>⇒ Quantité : 100ml</p>

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

export default Renew