// src/components/Banner.jsx
import React from 'react';
import styles from './Banner.module.css';
import bgbanner from '../../assets/img/bg-banner.png';

function Banner() {
  return (
    <a href="https://www.youtube.com/watch?v=c8mVlakBESE&ab_channel=MarioSouto-DevSoutinho" target="_blank" rel="noopener noreferrer" className={styles.bannerLink}>
      <div className={styles.bannerContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.tag}>FRONTEND</div>
            <h1>SEO con React</h1>
            <p>En este video estoy aquí para contarles que aprenderemos cómo iniciar una aplicación 
                inspirada en los dibujos animados de Pokémon con Nextjs y React, veremos algunos consejos 
                sobre rendimiento y también conoceremos una plataforma increíble para implementar, que es 
                Vercel. Todo en 22 minutos en este vídeo hecho con todo el amor del mundo construyendo 
                una "Pokedex"!</p>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.card} style={{ backgroundImage: `url(${bgbanner})` }}></div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Banner;
