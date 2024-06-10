// src/components/AddButton.js
import React from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import styles from "./AddButton.module.css";

export default function AddButton({ onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={onClick}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <IoAddCircleSharp />
          </div>
          <div className={styles.label}>
            Add Competitors
          </div>
        </div>
      </div>
    </div>
  );
}
