import React from 'react'

const Shampoo = () => {
  return (
    <div className='shampo'>
        <div className='images'>
            <img src='' alt='Shampoo_1' />
            <img src='' alt='Shampoo_2' />
            <img src='' alt='Shampoo_3' />
        </div>

        <h2>Shampoo Shoesvap</h2>

        <div className='description'>
            <h4>Description :</h4>
            <p>Shampoo Shoesvap est spécialement conçu pour éliminer les taches tenaces sur tous types de chaussures,
                 même les plus délicates. Il agit en profondeur tout en respectant les matériaux comme le cuir,
                  le daim et les tissus. Idéal pour redonner un coup de neuf à vos sneakers, boots ou chaussures de ville.
                   Sa formule avancée élimine la saleté et les taches sans agresser les matériaux ni dissoudre la colle.
                    Grâce à son effet rénovateur, il ravive la couleur d'origine et redonne souplesse et douceur au cuir.</p>
        </div>

        <div className='mode-emploi'>
            <h4>Mode d'emploi :</h4>
            <p>1. Appliquez une petite quantité de shampoo sur une brosse humide. <br/>
               2. Brossez délicatement la zone tachée en effectuant des mouvements circulaires. <br/>
               3. Essuyez avec une serviette microfibre humide. <br/>
               4. Laissez sécher à l’air libre, à l’abri du soleil direct. <br/>
               5. Répétez si nécessaire pour éliminer les taches persistantes.</p>
        </div>

        <div className='precaution'>
            <h4>Précaution :</h4>
            <p>⚠️ Effectuez un test sur une petite zone avant utilisation. <br/>
               ⚠️ Ne pas utiliser sur des matériaux sensibles à l'eau comme certains cuirs suédés non traités. <br/>
               ⚠️ Conserver dans un endroit sec, à l'abri de la chaleur.</p>
        </div>

        <h5>🛒 Offrez à vos chaussures un nettoyage en profondeur et une seconde jeunesse avec Shampoo Shoesvap !</h5>

        <p>⇒ Quantité : 150ml</p>

        <div className='prix flex'>
            <p>Prix :</p>
            <p style={{textDecoration:'line-through'}}>20 TND</p>
            <p>15 TND</p>
        </div>

    </div>
  )
}

export default Shampoo