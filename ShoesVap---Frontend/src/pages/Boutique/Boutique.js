import React from 'react'
import './BoutiqueStyle.css'

const Boutique = () => {
  return (
    <div className="Hero-2">
      <h1 style={{textAlign:'center', marginTop:'30px'}} >Bienvenue dans notre <br/> boutique</h1>
    <div className="containers">
        <div className="boxs">
            <img src="https://via.placeholder.com/250x200" alt="Produit 1"/>
            <div className="description">
                <h3>Blanchisseur Shoesvap</h3>
                <p>Une description du produit 1.</p>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="boxs">
            <img src="https://via.placeholder.com/250x200" alt="Produit 2"/>
            <div className="description">
                <h3>Shampoing Shoesvap</h3>
                <p>Une description du produit 2.</p>
                <div className="price">$15.00</div>
            </div>
        </div>
        <div className="boxs">
            <img src="https://via.placeholder.com/250x200" alt="Produit 3"/>
            <div className="description">
                <h3>Foam Shoesvap</h3>
                <p>mousse nettoyante</p>
                <div className="price">$20.00</div>
            </div>
        </div>
        <div className="boxs">
            <img src="https://via.placeholder.com/250x200" alt="Produit 4"/>
            <div className="description">
                <h3>Protect Shoesvap</h3>
                <p>Une description du produit 4.</p>
                <div className="price">$25.00</div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Boutique