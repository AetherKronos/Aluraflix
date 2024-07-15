// src/components/VideoGallery.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategorySection from '../CategorySection';
import { categories } from '../../categories';
import styles from './VideoGallery.module.css';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error al buscar videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm('¿Esta seguro que desea borrar el video?');
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/videos/${id}`);
      setVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Error al borrar el video:', error);
      alert('Error al borrar el video.');
    }
  };

  const handleSave = async (updatedVideo) => {
    try {
      await axios.put(`http://localhost:3001/videos/${updatedVideo.id}`, updatedVideo);
      setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
    } catch (error) {
      console.error('Error al guardar el video:', error);
      alert('Error al guardar el video.');
    }
  };

  const categorizedVideos = categories.map(category => ({
    category,
    videos: videos.filter(video => video.category === category).slice(0, 3), // Limita a 3 videos por categoría
  }));

  return (
    <div className={styles.gallery}>
      {categorizedVideos.map(({ category, videos }) => (
        <CategorySection key={category} category={category} videos={videos} onDelete={handleDelete} onSave={handleSave} />
      ))}
    </div>
  );
};

export default VideoGallery;
