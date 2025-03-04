import React, { useState } from 'react';
import './ServiceStyle.css';

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    { title: "Chaussure", content: "Nettoyage Basket Simple .....................15Dt", content1:"Nettoyage Bottine ...................................25Dt", content2:"Nettoyage Haut De Gamme ................25Dt" },
    { title: "Sac", content: "Sac Simple .....................20Dt", content1:"Sac Haut De Gamme ...................................25Dt" },
    { title: "Moto", content: "Nettoyage Gilet Moto .....................20Dt", content1:"Casque Moto ...................................15Dt", content2:"Gant Moto ................5Dt" },
    { title: "Voiture", content: "Chaise Voiture .....................25Dt", content1:"Chaise enfant ...................................20Dt", content2:"MaxiCosi ................20Dt" },
  ];

  return (
    <div className="service">
      <h1 style={{textAlign:'center'}}>Nos services</h1>
      {data.map((item, index) => (
        <div className="accordion" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
            <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>
              &#9654;
            </span>
          </div>

<div
  className="accordion-content"
  style={{ display: activeIndex === index ? 'block' : 'none' }}
>
  <div className="content-row">
    <span className="content-title">{item.content.split(".....................")[0]}</span>
    <span className="content-price">{item.content.split(".....................")[1]}</span>
  </div>
  {item.content1 && (
    <div className="content-row">
      <span className="content-title">{item.content1.split("...................................")[0]}</span>
      <span className="content-price">{item.content1.split("...................................")[1]}</span>
    </div>
  )}
  {item.content2 && (
    <div className="content-row">
      <span className="content-title">{item.content2.split("................")[0]}</span>
      <span className="content-price">{item.content2.split("................")[1]}</span>
    </div>
  )}
</div>

        </div>
      ))}

<hr/>

<div className="cards-container">
  <div className="card">
      <img src="/assets/photo1.png" alt="Image_1"/>
      <h2>Traitement Sur Place</h2>
      <p>Préférez un passage rapide à notre atelier ? <br/>
         Profitez d'un nettoyage professionnel immédiat grâce à nos équipements modernes et notre <br/> expertise.</p>
      <button><a href="https://wa.me/21657244160">Contactez-Nous</a></button>
  </div>

  <div className="card">
      <img src="/assets/photo2.png" alt="Image_2"/>
      <h2>Retrait et Livraison</h2>
      <p>Simplifiez-vous la vie avec un service de récupération et de livraison.
         Shoesvap nettoie vos chaussures avec soin et vous les retourne directement
         chez vous ou à votre bureau, sans effort de votre part.</p>
      <button><a href="https://wa.me/21657244160">Contactez-Nous</a></button>
  </div>

</div>
    </div>
  );
};

export default Service;