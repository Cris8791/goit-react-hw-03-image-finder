import React from 'react';
import styles from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button className={styles.Button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
