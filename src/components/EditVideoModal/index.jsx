// src/components/EditVideoModal.jsx
import React, { useState, useEffect } from 'react';
import styles from './EditVideoModal.module.css';
import { categories } from '../../categories';

const EditVideoModal = ({ isOpen, onClose, video, onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (video) {
      setTitle(video.title);
      setCategory(video.category);
      setImage(video.image);
      setVideoUrl(video.video);
      setDescription(video.description);
    }
  }, [video]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { ...video, title, category, image, video: videoUrl, description };
    onSave(updatedVideo);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>EDITAR TARJETA</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Ingrese el título" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Categoría</label>
            <select 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione una categoría</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">Imagen</label>
            <input 
              type="text" 
              id="image" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              placeholder="Inserte el link de la imagen" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="video">Vídeo</label>
            <input 
              type="text" 
              id="video" 
              value={videoUrl} 
              onChange={(e) => setVideoUrl(e.target.value)} 
              placeholder="Digite o link do vídeo" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descripción</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="¿De qué trata el video?" 
            ></textarea>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>GUARDAR</button>
            <button type="button" className={styles.clearButton} onClick={() => {
              setTitle('');
              setCategory('');
              setImage('');
              setVideoUrl('');
              setDescription('');
            }}>LIMPIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVideoModal;
