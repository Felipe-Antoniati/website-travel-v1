import React from 'react';
import '../styles/global.css';
import {Button} from './Button';

import '../styles/components/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoplay loop muted/>
      <h1>Em frentre ao Mar</h1>
      <p>Conforto e Liberdade em um só Lugar.</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Entrar em Contato
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Assistir Vídeo
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
