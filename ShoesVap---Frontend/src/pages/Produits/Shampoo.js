import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./ProduitStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Shampoo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../../../assets/shhampo1000.jpg", alt: "Shampoo_1" },
    { src: "../../../assets/shampoo 1000 2.jpg", alt: "Shampoo_2" },
    { src: "../../../assets/shampoo site 3 1000.jpg", alt: "Shampoo_3" },
  ];

  return (
    <div className="shampo">
      <h2>Shampoo Shoesvap</h2>
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

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Agrandie" className="modal-image" />
        </div>
      )}

      <div className="description">
        <h4>Description :</h4>
        <p>
          Shampoo Shoesvap est spécialement conçu pour éliminer les taches tenaces sur tous types de chaussures,
          même les plus délicates. Il agit en profondeur tout en respectant les matériaux comme le cuir,
          le daim et les tissus...
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Mode d'emploi :</h4>
        <p>
          1. Appliquez une petite quantité de shampoo sur une brosse humide. <br />
          2. Brossez délicatement la zone tachée en effectuant des mouvements circulaires. <br />
          3. Essuyez avec une serviette microfibre humide. <br />
          4. Laissez sécher à l’air libre, à l’abri du soleil direct. <br />
          5. Répétez si nécessaire pour éliminer les taches persistantes.
        </p>
      </div>

      <div className="precaution">
        <h4>Précaution :</h4>
        <p>
          ⚠️ Effectuez un test sur une petite zone avant utilisation. <br />
          ⚠️ Ne pas utiliser sur des matériaux sensibles à l'eau comme certains cuirs suédés non traités. <br />
          ⚠️ Conserver dans un endroit sec, à l'abri de la chaleur.
        </p>
      </div>

      <h5>🛒 Offrez à vos chaussures un nettoyage en profondeur et une seconde jeunesse avec Shampoo Shoesvap !</h5>

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

export default Shampoo;

