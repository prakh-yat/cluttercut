import React from 'react'
import styles from './FirstContactResolution.module.css'

export default function FirstContactResolution() {
  return (
    <div className={styles.container}>
        <div className={styles.box_a}>
        <div className={styles.title}>
        First Contact Resolution
        </div>
        <div className={styles.value}>
            #72
        </div>
        </div>
        <div className={styles.box_b}>
            <div className={styles.title}>
                Net Promoter Score
            </div>
            <div className={styles.value}>
                100%
            </div>
        </div>
    </div>
  )
}
