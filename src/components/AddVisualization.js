// src/components/AddVisualization.js
import React, { useState } from 'react';
import styles from './AddVisualization.module.css';

export default function AddVisualization({ onClose }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.form}>
          <div className={styles.header}>
            Add a competitor name
          </div>
          <div className={styles.body}>
            <div className={styles.question}>
              Enter the name of a competitor that you want to track whenever the users chat about it.
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter competitor here (e.g: Coca Cola, Facebook, etc.)"
                />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.submit}>
              Add Competitor
            </div>
            <div className={styles.discard} onClick={onClose}>
              Discard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
