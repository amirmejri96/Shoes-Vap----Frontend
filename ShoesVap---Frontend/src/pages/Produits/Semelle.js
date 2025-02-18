import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './ProduitStyle.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Semelle = () => {
  return (
    <div className="shampo">
      {/* Slider Swiper pour afficher plusieurs images si besoin */}
      <div className="images">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="../../../assets/semelle.jpg" alt="Semelles Orthopédiques" />
          </SwiperSlide>
          {/* Ajoutez d'autres images ici si nécessaire */}
        </Swiper>
      </div>

      <h2>Semelles Orthopédiques</h2>

      <div className="description">
        <h4>Description :</h4>
        <p>
          Offrez à vos pieds un maintien optimal et un confort inégalé avec nos semelles orthopédiques.
          Conçues pour soulager la fatigue et corriger la posture,
          elles s’adaptent parfaitement à toutes vos chaussures pour un bien-être au quotidien.
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Les avantages :</h4>
        <p>
          ✅ Soutien ergonomique : Réduit la pression et favorise un bon alignement du pied. <br />
          ✅ Amorti renforcé : Absorbe les chocs et soulage les douleurs plantaires. <br />
          ✅ Matériaux respirants : Limite la transpiration et assure une sensation de fraîcheur. <br />
          ✅ Adaptabilité universelle : Convient aux baskets, chaussures de ville et de sport.
        </p>
      </div>

      <h5>🛒 Prenez soin de vos pieds dès aujourd'hui !</h5>

      <p>⇒ Couleur disponible : Noir / Blanc</p>

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

export default Semelle;
