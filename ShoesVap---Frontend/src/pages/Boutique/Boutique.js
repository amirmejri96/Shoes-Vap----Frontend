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
                        <a href='/shampoo'><h3>Shampoo Shoesvap</h3></a>
                        <p>Quantité : 150ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/FOAM.jpg" alt="Produit 1" />
                    <div className="description">
                        <a href='/foam'><h3>Foam Shoesvap</h3></a>
                        <p>Quantité : 150ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/WHITE.jpg" alt="Produit 3" />
                    <div className="description">
                        <a href='/white-renew'><h3>White Renew Shoesvap</h3></a>
                        <p>Quantité : 100ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/DUO.jpg" alt="Produit 4" />
                    <div className="description">
                        <a href='/sneakers-deo'><h3>Sneakers Deo Shoesvap</h3></a>
                        <p>Quantité : 250ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/PACK NEW.jpg" alt="Produit 4" />
                    <div className="description">
                        <a href='/pack'><h3>Pack Total Care Shoesvap</h3></a>
                        <p>Tout ce dont vous avez besoin.</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>49 TND</span><span>39 TND</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Boutique