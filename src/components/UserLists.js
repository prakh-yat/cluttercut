import React from 'react'
import styles from './UserList.module.css'

export default function UserLists() {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <div className={styles.fullname}>
                Kushal Sarkar
            </div>
            <div className={styles.initials}>
            <a>Delete</a>
            </div>
        </div>
        <div className={styles.user}>
            <div className={styles.fullname}>
                Prakhyat Shrestha
            </div>
            <div className={styles.initials}>
            <a>Delete</a>
            </div>
        </div>
        <div className={styles.user}>
            <div className={styles.fullname}>
                Abhishek Regmi
            </div>
            <div className={styles.initials}>
                <a>Delete</a>
                
            </div>
        </div>

    </div>

  )
}




