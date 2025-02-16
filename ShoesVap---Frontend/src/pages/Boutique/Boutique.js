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
                        <p>Quantité : 150ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                        <a href='/shampoo'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/FOAM.jpg" alt="Produit 1" />
                    <div className="description">
                        <h3>Foam Shoesvap</h3>
                        <p>Quantité : 150ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                        <a href='/foam'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/WHITE.jpg" alt="Produit 3" />
                    <div className="description">
                        <h3>White Renew Shoesvap</h3>
                        <p>Quantité : 100ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                        <a href='/white-renew'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/DUO.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Sneakers Deo Shoesvap</h3>
                        <p>Quantité : 250ml</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                        <a href='/sneakers-deo'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/PACK NEW.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Pack Total Care Shoesvap</h3>
                        <p>Tout ce dont vous avez besoin.</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>49 TND</span><span>39 TND</span></div>
                        <a href='/pack'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/anti-plis.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Anti-Plis pour Chaussures</h3>
                        <p>Protégez vos chaussures préférées.</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>15 TND</span><span>12 TND</span></div>
                        <a href='/anti-plis'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/antiglissoir.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Anti-Glissoires </h3>
                        <p>Confort et Maintien Parfait pour Vos Chaussures.</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>10 TND</span><span>7 TND</span></div>
                        <a href='/anti-glissoire'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/lacets-bleu-marine.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Lacets en Coton 1M</h3>
                        <p>Élégance, résistance et confort.</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>8 TND</span><span>6 TND</span></div>
                        <a href='/lacets'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
                <div className="boxs">
                    <img src="../../../assets/semelle.jpg" alt="Produit 4" />
                    <div className="description">
                        <h3>Semelles Orthopédiques </h3>
                        <p>Confort et Soutien pour Vos Pieds.</p>
                        <div className="price"><span style={{textDecoration:"line-through", marginRight:'10px'}}>20 TND</span><span>15 TND</span></div>
                        <a href='/semelles'><button>Plus d'informations</button></a>
                        <div><a href='https://www.facebook.com/messages/t/146083786054011'><button>Commander</button></a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Boutique