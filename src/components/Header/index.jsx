import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import titleImage from '../../assets/LogoMain.png';
import Button from '../Button';

function Header() {
  const location = useLocation();

  const NuevaRutaDeVideo = location.pathname === '/nuevo-video';

  return (
    <header className={styles.header}>
      <img src={titleImage} alt="Title" className={styles.titleImage} />
      <div className={styles.buttonsDiv}>
        <Button 
          label="HOME" 
          styleType={NuevaRutaDeVideo ? "secondary" : "primary"} 
          onClick={() => { window.location.href = "/" }}  
        />
        <Button 
          label="Nuevo Video" 
          styleType={NuevaRutaDeVideo ? "primary" : "secondary"} 
          onClick={() => { window.location.href = "/nuevo-video" }} 
        />
      </div>
    </header>
  );
}

export default Header;
