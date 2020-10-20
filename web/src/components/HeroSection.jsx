import React from 'react';
import '../styles/global.css';
import {Button} from './Button';

import '../styles/components/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoplay="autoplay" type="video/mp4" loop muted/>
      <h1>TrinCamp</h1>
      <p>Conheça as piscinas naturais de cachadaço</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Assistir Video
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Entrar em contato
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
