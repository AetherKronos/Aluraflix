import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import VideoGallery from '../../components/VideoGallery';
import styles from './Home.module.css';


function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className={styles.mainContent}>
        <VideoGallery />
      </main>
      <Footer />
    </>
  )
}

export default Home