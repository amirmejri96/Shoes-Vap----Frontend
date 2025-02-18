import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './ProduitStyle.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AntiGlissoire = () => {
  return (
    <div className="shampo">
      {/* Slider Swiper pour les images */}
      <div className="images">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="../../../assets/antiglissoir.jpg" alt="Anti glissoires beige" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/anti-glissoire-blanc.jpg" alt="Anti glissoires blanc" />
          </SwiperSlide>
        </Swiper>
      </div>

      <h2>Anti-Glissoires</h2>

      <div className="description">
        <h4>Description :</h4>
        <p>
          Dites adieu aux talons qui glissent et aux chaussures qui frottent !
          Nos anti-glissoires assurent un maintien optimal de votre pied dans la chaussure,
          réduisant ainsi les frottements et les ampoules.
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Les avantages :</h4>
        <p>
          ✅ Adhérence optimale pour éviter les glissements. <br />
          ✅ Confort accru grâce à un rembourrage doux. <br />
          ✅ Facile à installer et compatible avec toutes les chaussures. <br />
          ✅ Idéal pour talons, baskets, mocassins et chaussures de ville.
        </p>
      </div>

      <h5>🛒 Offrez à vos pieds le confort qu’ils méritent. Commandez dès maintenant et marchez en toute sérénité !</h5>

      <p>⇒ Confort et maintien parfait pour vos chaussures !</p>

      <div className="prix flex">
        <p>Prix :</p>
        <p style={{ textDecoration: "line-through" }}>10 TND</p>
        <p>7 TND</p>
      </div>

      <div className="commander">
        <button>
          <a href="https://wa.me/21657244160">Commander</a>
        </button>
      </div>
    </div>
  );
};

export default AntiGlissoire;
