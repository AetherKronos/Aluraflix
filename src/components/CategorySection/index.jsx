// src/components/CategorySection.jsx
import React from 'react';
import VideoCard from '../VideoCard';
import styles from './CategorySection.module.css';

const CategorySection = ({ category, videos, onDelete, onSave }) => {
  const getCategoryClass = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return styles.frontend;
      case 'backend':
        return styles.backend;
      case 'mobile':
        return styles.mobile;
      case 'innovacion y gestion':
        return styles.innovacion;
      default:
        return '';
    }
  };

  return (
    <div className={styles.section}>
      <h2 className={`${styles.title} ${getCategoryClass(category)}`}>{category}</h2>
      <div className={styles.videoList}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onDelete={onDelete} onSave={onSave} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
