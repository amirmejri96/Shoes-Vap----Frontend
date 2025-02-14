import React from 'react'
import './BoutiqueStyle.css'

const Boutique = () => {
    return (
        <div className="Hero-2">
            <h1 style={{ textAlign: 'center', marginTop: '30px', color: 'white' }} >Bienvenue dans notre <br /> Boutique</h1>
            <div className="containers">
                <div className="boxs">
                    <img src="../../../assets/SHAMPO.jpg" alt="Produit 2" />
                    <div className="description">
                        <h3>Shampoo Shoesvap</h3>
                        <p>Shampoo Shoesvap est spécialement conçu pour éliminer les taches tenaces sur tous types de chaussures, même les plus délicates.
                            Il agit en profondeur tout en respectant les matériaux comme le cuir, le daim et les tissus. Idéal pour redonner
                            un coup de neuf à vos sneakers, boots ou chaussures de ville. Sa formule avancée élimine la saleté et les taches
                            sans agresser les matériaux ni dissoudre la colle. Grâce à son effet rénovateur,
                            il ravive la couleur d'origine et redonne souplesse et douceur au cuir.</p> <br />
                        <button><a href='../../../assets/shampoo.pdf' target="_blank" rel="noopener noreferrer">Mode d'emploi</a></button> <br />
                        <br />
                        <p> 🛒 Offrez à vos chaussures un nettoyage en profondeur et une seconde jeunesse avec Shampoo Shoesvap ! <br /> <br /> Quantité : 150ml </p>
                        <div className="price">15 TND</div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/FOAM.jpg" alt="Produit 1" />
                    <div className="description">
                        <h3>Foam Shoesvap</h3>
                        <p>Foam Shoesvap est une mousse nettoyante pratique, idéale pour un entretien quotidien de vos chaussures.
                            Sa formule auto-séchante permet un nettoyage rapide sans rinçage, tout en laissant une magnifique odeur fraîche qui dure longtemps.
                            Elle est spécialement conçue pour nettoyer efficacement sans abîmer les matériaux comme le cuir, le daim et les tissus techniques. </p> <br />
                        <button><a href='../../../assets/foam.pdf' target="_blank" rel="noopener noreferrer">Mode d'emploi</a></button> <br />
                        <br />
                        <p> 🛒 Avec Foam Shoesvap, nettoyez vos chaussures en un instant, sans effort et avec une fraîcheur durable ! <br /> <br /> <br /> <br /> <br /> <br /> Quantité : 150ml</p>
                        <div className="price">15 TND</div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/WHITE.jpg" alt="Produit 3" />
                    <div className="description">
                        <h3>White Renew Shoesvap</h3>
                        <p>Le White Renew Shoesvap est conçu pour dégriser et blanchir les semelles jaunies, en redonnant éclat et propreté à vos chaussures. Sa formule avancée agit efficacement sur les matières en caoutchouc et plastique, garantissant un résultat durable et homogène.
                            Facile à appliquer avec le pinceau, il agit efficacement après 1 heure d'exposition au soleil. </p> <br /> <br />
                        <button><a href='../../../assets/white renew.pdf' target="_blank" rel="noopener noreferrer">Mode d'emploi</a></button> <br />
                        <br />
                        <p> 🛒 Retrouvez des semelles éclatantes avec White Renew Shoesvap ! <br /> <br /> <br /> <br /> <br /> <br /> <br /> Quantité : 100ml </p>
                        <div className="price">15 TND</div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/DUO.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Sneakers Deo Shoesvap</h3>
                        <p>Le Sneakers Deo Shoesvap est conçu pour neutraliser les mauvaises odeurs et apporter une fraîcheur durable à vos chaussures.
                            Sa formule efficace élimine les bactéries responsables des odeurs désagréables et
                            laisse un parfum agréable qui dure toute la journée. Facile à utiliser,
                            il convient à tous types de chaussures (sneakers, baskets, chaussures de sport, de ville et de travail).</p> <br />
                        <button><a href='../../../assets/sneakers deo.pdf' target="_blank" rel="noopener noreferrer">Mode d'emploi</a></button> <br /> <br />
                        <p> 🛒 Gardez vos chaussures fraîches et agréables à porter avec le Sneakers Deo Shoesvap ! <br /> <br /> <br /> <br /> Quantité : 250ml</p>
                        <div className="price">20 TND</div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/PACK NEW.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Pack Total Care Shoesvap</h3>
                        <p>Le pack ultime pour un nettoyage et un entretien complet de vos chaussures.
                            Que ce soit pour un lavage en profondeur, un entretien quotidien ou un traitement pour déjaunir les semelles,
                            ce kit contient tout ce dont vous avez besoin.</p> <br />
                        <p>Contenu du pack : <br />
                            ✅ Shampoo Shoesvap (100 ml) – Élimine les taches tenaces et redonne de l’éclat. <br />
                            ✅ Foam Shoesvap (150 ml) – Une mousse nettoyante pour l’entretien quotidien. <br />
                            ✅ White Renew Shoesvap (100 ml) – Ravive et blanchit les semelles jaunies. <br />
                            ✅ Brosse de nettoyage – Idéale pour appliquer le shampoo et nettoyer en profondeur. <br />
                            ✅ Pinceau applicateur – Pour une application précise du White Renew. <br />
                            ✅ Sachet plastique – Optimise l’efficacité du traitement des semelles. <br />
                            ✅ Microfibre de qualité – Pour un séchage et une finition impeccables. <br />
                            ✅ Gant de protection – Assure une application sécurisée des produits.</p>
                         <br /> <br />
                        <p> 🛒 Ce pack Pack Total Care est la solution complète pour des chaussures toujours impeccables ! <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> Quantité : 250ml</p>
                        <div className="price">39 TND</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Boutique