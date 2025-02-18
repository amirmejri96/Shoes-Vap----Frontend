import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './ProduitStyle.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Lacets = () => {
  return (
    <div className="shampo">
      {/* Slider pour les images des lacets */}
      <div className="images">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="../../../assets/lacets-blanc.jpg" alt="Lacets Blanc" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/lacets-bleu-marine.jpg" alt="Lacets Bleu Marine" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/lacets-noire.jpg" alt="Lacets Noir" />
          </SwiperSlide>
        </Swiper>
      </div>

      <h2>Lacets en Coton 1M</h2>

      <div className="description">
        <h4>Description :</h4>
        <p>
          Redonnez vie à vos chaussures avec nos lacets en coton haut de gamme.
          Conçus pour offrir une excellente résistance à l’usure, ils garantissent un maintien optimal et un look raffiné.
          Leur tressage soigné assure une grande durabilité, tandis que leur texture douce préserve le confort à chaque pas.
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Les avantages :</h4>
        <p>
          ✅ Matériau premium : 100% coton de haute qualité pour une souplesse et une solidité accrues. <br />
          ✅ Longueur idéale (1m) : Parfait pour sneakers, chaussures de ville et casual. <br />
          ✅ Tressage renforcé : Résistance aux frottements et à l'effilochage. <br />
          ✅ Finitions impeccables : Embouts solides pour un laçage facile et durable.
        </p>
      </div>

      <h5>🛒 Ajoutez une touche de sophistication à vos chaussures dès maintenant !</h5>

      <p>🎨 Couleurs disponibles : Bleu marine / Noir / Blanc / Gris</p>

      <div className="prix flex">
        <p>Prix :</p>
        <p style={{ textDecoration: "line-through" }}>8 TND</p>
        <p>6 TND</p>
      </div>

      <div className="commander">
        <button>
          <a href="https://wa.me/21657244160">Commander</a>
        </button>
      </div>
    </div>
  );
};

export default Lacets;
