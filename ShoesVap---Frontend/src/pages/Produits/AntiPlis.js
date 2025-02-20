import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './ProduitStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AntiPlis = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../../../assets/anti-plis.jpg", alt: "Anti plis blanc" },
    { src: "../../../assets/anti-plis-noire.jpg", alt: "Anti plis noir" }
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

      <h2>Anti-Plis pour Chaussures</h2>

      <div className="description">
        <h4>Description :</h4>
        <p>
          Protégez vos chaussures préférées avec nos anti-plis innovants !
          Conçus pour prévenir les plis inesthétiques sur l'avant de vos sneakers,
          nos protège-plis assurent une tenue impeccable tout en offrant un confort optimal.
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Les avantages :</h4>
        <p>
          ✅ Adaptable à toutes les tailles et formes de chaussures. <br />
          ✅ Confortable et discret - se glisse sans gêne à l'intérieur. <br />
          ✅ Matériaux résistants pour une durabilité maximale. <br />
          ✅ Idéal pour sneakers, baskets et chaussures de ville.
        </p>
      </div>

      <h5>🛒 Ne laissez plus les plis gâcher votre style ! Commandez dès maintenant et offrez une longévité incomparable à vos chaussures !</h5>

      <p>⇒ Couleurs disponibles : Noir / Blanc</p>

      <div className="prix flex">
        <p>Prix :</p>
        <p style={{ textDecoration: "line-through" }}>15 TND</p>
        <p>12 TND</p>
      </div>

      <div className="commander">
        <button>
          <a href="https://wa.me/21657244160">Commander</a>
        </button>
      </div>
    </div>
  );
};

export default AntiPlis;

