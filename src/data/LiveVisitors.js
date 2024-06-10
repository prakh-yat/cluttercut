import React from 'react';
import styles from './LiveVisitors.module.css';
import { PiUsersThreeLight } from 'react-icons/pi';

export default function LiveVisitors({ data }) {
  if (!data) {
    // Render loading state if data is not available yet
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <PiUsersThreeLight />
        </div>
        <div className={styles.data}>
          Loading... <span className={styles.label}>Online Visitors</span>
        </div>
      </div>
    );
  }

  // Render the data once it's available
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <PiUsersThreeLight />
      </div>
      <div className={styles.data}>
        {data.online_visitors} <span className={styles.label}>Online Visitors</span>
      </div>
    </div>
  );
}
