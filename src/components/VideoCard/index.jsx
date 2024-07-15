// src/components/VideoCard.jsx
import React, { useState } from 'react';
import EditVideoModal from '../EditVideoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './VideoCard.module.css';

const VideoCard = ({ video, onDelete, onSave }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className={styles.card}>
      <a href={video.video} target="_blank" rel="noopener noreferrer">
        <img src={video.image} alt={video.title} className={styles.thumbnail} />
      </a>
      <div className={styles.actions}>
        <button className={styles.deleteButton} onClick={() => onDelete(video.id)}>
          <FontAwesomeIcon icon={faTrash} /> DELETAR
        </button>
        <button className={styles.editButton} onClick={() => setIsEditModalOpen(true)}>
          <FontAwesomeIcon icon={faEdit} /> EDITAR
        </button>
      </div>
      <EditVideoModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        video={video}
        onSave={(updatedVideo) => {
          onSave(updatedVideo);
          setIsEditModalOpen(false);
        }}
      />
    </div>
  );
};

export default VideoCard;
