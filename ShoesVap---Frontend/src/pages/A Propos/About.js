import React from 'react';
import './AboutStyle.css';

const About = () => {
  return (
    <div className="hero">
      <div className="info-box">
        <div className="info-box-left">
          <div className="logo-box">
            <img src="/assets/logo2.jpg" alt="Logo" />
          </div>
          <p>
            ShoesVap est le spécialiste du nettoyage de chaussures à la vapeur à Tunis. 
            Notre équipe expérimentée et passionnée utilise des techniques avancées pour 
            redonner vie à vos chaussures préférées. Nous comprenons l'importance de chaussures 
            propres et bien entretenues, c'est pourquoi nous nous engageons à fournir un service 
            rapide, efficace et fiable. Que ce soit pour éliminer les taches tenaces, éliminer 
            les mauvaises odeurs ou redonner de l'éclat à vos chaussures. 
            Parcourez notre site pour découvrir nos services de nettoyage à la vapeur et les forfaits que nous proposons.
          </p>
        </div>
        <div className="info-box-right">
          <img src="/assets/about.jpg" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
