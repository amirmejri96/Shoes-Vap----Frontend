import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import './ProduitStyle.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Pack = () => {
  return (
    <div className="shampo">
      <div className="images">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="../../../assets/pack site 3 1000.jpg" alt="Pack_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/shhampo1000.jpg" alt="Pack_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/foam 1000.jpg" alt="Pack_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/white1000.jpg" alt="Pack_4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../assets/duo 1000.jpg" alt="Pack_5" />
          </SwiperSlide>
        </Swiper>
      </div>

      <h2>Pack Total Care Shoesvap</h2>

      <div className="description">
        <h4>Description :</h4>
        <p>
          Le pack ultime pour un nettoyage et un entretien complet de vos chaussures.
          Que ce soit pour un lavage en profondeur, un entretien quotidien ou un traitement pour déjaunir les semelles,
          ce kit contient tout ce dont vous avez besoin.
        </p>
      </div>

      <div className="mode-emploi">
        <h4>Mode d'emploi :</h4>
        <p>
          1. Pour un nettoyage en profondeur : Utilisez le Shampoo Shoesvap avec la brosse pour éliminer les taches tenaces. <br />
          2. Pour un entretien quotidien : Appliquez la Foam Shoesvap avec un chiffon ou une brosse douce. <br />
          3. Pour raviver les semelles jaunies : Appliquez White Renew avec le pinceau, enveloppez la chaussure dans le sachet plastique et laissez agir sous le soleil 1h. <br />
          4. Finition : Essuyez avec la microfibre et protégez vos mains avec le gant fourni.
        </p>
      </div>

      <div className="precaution">
        <h4>Précaution :</h4>
        <p>
          ⚠️ Testez chaque produit sur une petite zone avant utilisation. <br />
          ⚠️ Utilisez dans un espace ventilé. <br />
          ⚠️ Gardez hors de portée des enfants. <br />
          ⚠️ Évitez tout contact avec les yeux et la peau. <br />
          ⚠️ Conserver à l'abri de la lumière et de la chaleur.
        </p>
      </div>

      <h5>🛒 Ce pack Pack Total Care est la solution complète pour des chaussures toujours impeccables !</h5>

      <div className="prix flex">
        <p>Prix :</p>
        <p style={{ textDecoration: "line-through" }}>49 TND</p>
        <p>39 TND</p>
      </div>

      <div className="commander">
        <button>
          <a href="https://wa.me/21657244160">Commander</a>
        </button>
      </div>
    </div>
  );
};

export default Pack;
