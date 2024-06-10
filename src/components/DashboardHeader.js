import React from 'react'
import styles from './DashboardHeader.module.css'
import { FaCircleUser } from "react-icons/fa6";


export default function DashboardHeader() {
  return (
    <div className={styles.holder}>
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.title}>
                <div className={styles.logo}>
                    <img src='/logoonly.svg' alt='logo' />
                </div>
                <div className={styles.texts}>
                    <div className={styles.subtle_text}>XYZ Company Pvt. Ltd.</div>
                    <div className={styles.main_text}>Dashboard</div>
                </div>
            </div>
            <div className={styles.menu}>
                <FaCircleUser />
                <div className={styles.logout}>
                    Log out
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}
