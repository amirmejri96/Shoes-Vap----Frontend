import React from 'react'
import './AboutStyle.css'

const About = () => {
  return (
    <div className='Hero-1'>
        <div className="InfoBox">
        <div className="InfoBox-left">
          <div className="logo-box">
            <img style={{width:'20%'}} src='../../../assets/logo2.jpg' alt='Logo Box' />
          </div>
          <p>
          ShoesVap est le spécialiste du nettoyage de <br/> 
          chaussures à la vapeur à Tunis. Notre équipe <br/>
          expérimentée et passionnée utilise des techniques <br/>
          de nettoyage avancées pour redonner vie à vos <br/>
          chaussures préférées. Nous comprenons <br/>
          l'importance de chaussures propres et bien <br/>
          entretenues, c'est pourquoi nous nous engageons <br/>
          à fournir un service rapide, efficace et fiable. Que <br/>
          ce soit pour éliminer les taches tenaces, éliminer <br/>
          les mauvaises odeurs ou redonner de l'éclat à vos <br/>
          chaussures, nous sommes là pour vous aider. <br/>
          Parcourez notre site pour découvrir nos services <br/>
          de nettoyage à la vapeur et les forfaits que <br/>
           nous proposons.
          </p>
        </div>
        <div className="InfoBox-right">
          <img src='../../../assets/4.jpg' alt='Illustration' />
        </div>
      </div>
    </div>
  )
}

export default About