// Modal.js

import React from 'react';
import styles from './modal.module.css';
import Calendly from '../components/Calendly';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Talk To Expert</h2>
        <Calendly />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
