import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import "../styles/components/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Entre em contato com a gente via Whatsapp
        </p>
        <p className="footer-subscription-text">
          Adorariamos falar com você para responder qualquer dúvida (:
        </p>
        <div className="input-areas">
          <form>
            <Button buttonStyle="btn--primary">Entrar em contato</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Quem somos?</h2>
            <Link to="/">Familia</Link>
            <Link to="/">Amigos</Link>
            <Link to="/">Carreira</Link>
            <Link to="/">Regras da Comunidade</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Serviços</h2>
            <Link to="/">Hospedagem</Link>
            <Link to="/">Alimentação</Link>
            <Link to="/">Atividades</Link>
            <Link to="/">Horarios</Link>
          </div>
          <div class="footer-link-items">
            <h2>Redes Sociais</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Surf Camping
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Surf Camping © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
