import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
    <div className="footer-content">
        <p>Contactez-nous :</p>
        <ul className="footer-links">
            <li><a href="mailto:shoesvap@gmail.com"><i className="fas fa-envelope"></i></a></li>
            <li><a href="https://www.instagram.com/shoesvap2025"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/shoesvap2025"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://wa.me/21657244160" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="https://maps.app.goo.gl/fHt2WLEv6miK6kTW7" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a></li>
        </ul>
    </div>
</footer>


    </div>
  )
}

export default Footer