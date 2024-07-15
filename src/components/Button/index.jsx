// Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({label, onClick, styleType }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[styleType]}`}>
      {label}
    </button>
  );
};

export default Button;
