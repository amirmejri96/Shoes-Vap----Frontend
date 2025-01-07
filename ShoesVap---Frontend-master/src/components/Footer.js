import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
    <div className="footer-content">
        <p>Contactez-nous :</p>
        <ul className="footer-links">
            <li><a href="mailto:all.doufeni@gmail.com"><i className="fas fa-envelope"></i>all.doufeni@gmail.com</a></li>
            <li><a href="https://www.instagram.com/shoesvap2025"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://www.facebook.com/shoesvap2025"><i className="fab fa-facebook"></i> Facebook</a></li>
        </ul>
    </div>
</footer>


    </div>
  )
}

export default Footer