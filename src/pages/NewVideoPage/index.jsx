// src/pages/NewVideoPage.jsx
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewVideoForm from '../../components/NewVideoForm';
import styles from './NewVideoPage.module.css';

const NewVideoPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <NewVideoForm />
      </main>
      <Footer />
    </div>
  );
};

export default NewVideoPage;