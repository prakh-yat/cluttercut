import React from 'react'
import styles from './Title.module.css'
import { IoIosArrowDropright } from "react-icons/io";
import { DateRangePicker } from 'rsuite';

export default function Title() {
  return (
    <div className={styles.holder}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <IoIosArrowDropright />
                </div>
                <div className={styles.greetings}>
                    Good Morning!
                </div>
            </div>

            <div className={styles.date}>
                <DateRangePicker size='md' placeholder="Select Date Range" oneTap/>
            </div>
        </div>
    </div>
  )
}
