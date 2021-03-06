import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <Link to="/" className="logo-footer">
          <img src="/images/logo.png" alt="Logo de Petit Macarons" />
        </Link>
        <ul>
          <Link to="/aboutus/ofrecemos">
            <li>¿Qué ofrecemos?</li>
          </Link>
          <Link to="/aboutus/dirigimos">
            <li>¿A quién nos dirigimos?</li>
          </Link>
          <Link to="/contacto">
            <li>Contacto</li>
          </Link>
        </ul>
        <div>
          <Link to="/tienda">
            <p>Nuestros macarons</p>
          </Link>
          <Link to="/arma">
            <p>Arma tu macaron</p>
          </Link>
        </div>
      </div>
      <div className="copy-text">
        <p>&copy; Copyrigth Petit 2020</p>
        <em>Petit no posee los derechos de las imagenes aqui mostradas</em>
      </div>
    </div>
  );
};

export default Footer;
