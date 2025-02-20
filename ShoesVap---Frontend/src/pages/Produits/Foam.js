import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './ProduitStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Foam = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../../../assets/foam 1000.jpg", alt: "Foam 1" },
    { src: "../../../assets/foam  site 2 1000.jpg", alt: "Foam 2" },
    { src: "../../../assets/foam site 3 1000.jpg", alt: "Foam 3" }
  ];

  return (
    <div className="shampo">
      {/* Slider pour les images */}
      <div className="images">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedImage(image.src)}
                className="clickable-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal pour agrandir l'image */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Agrandie" className="modal-image" />
        </div>
      )}

      <h2>Foam Shoesvap</h2>

      <div className="description">
        <h4>Description :</h4>
        <p>
          Foam Shoesvap est une mousse nettoyante pratique, idéale pour un entretien quotidien de vos chaussures.
          Sa formule auto-séchante permet un nettoyage rapide sans rinçage, tout en laissant une magnifique odeur fraîche qui dure longtemps.
          Elle est spécialement conçue pour nettoyer efficacement sans abîmer les matériaux comme le cuir, le daim et les tissus techniques.
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Mode d'emploi :</h4>
        <p>
          ✅ Secouez le flacon avant usage. <br />
          ✅ Appliquez la mousse directement sur la chaussure ou sur une brosse douce. <br />
          ✅ Nettoyez en effectuant des mouvements circulaires. <br />
          ✅ Essuyez avec une serviette microfibre propre. <br />
          ✅ Laissez sécher naturellement – pas besoin de rinçage grâce à son effet auto-séchage.
        </p>
      </div>

      <div className="precaution">
        <h4>Précaution :</h4>
        <p>
          ⚠️ Testez sur une petite zone avant utilisation. <br />
          ⚠️ Ne pas appliquer sur des surfaces trop fragiles sans tester au préalable. <br />
          ⚠️ Conserver à l'abri de la lumière et de la chaleur.
        </p>
      </div>

      <h5>🛒 Avec Foam Shoesvap, nettoyez vos chaussures en un instant, sans effort et avec une fraîcheur durable !</h5>

      <p>⇒ Quantité : 150ml</p>

      <div className="prix flex">
        <p>Prix :</p>
        <p style={{ textDecoration: "line-through" }}>20 TND</p>
        <p>15 TND</p>
      </div>

      <div className="commander">
        <button>
          <a href="https://wa.me/21657244160">Commander</a>
        </button>
      </div>
    </div>
  );
};

export default Foam;

