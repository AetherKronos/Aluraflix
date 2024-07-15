import React from 'react'
import imgLogo from '../../assets/LogoMain.png'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={imgLogo} alt="Logo AluraFlix" />      
    </footer>
  )
}

export default Footer