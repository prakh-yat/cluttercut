import React from 'react'
import styles from './ChatsContainer.module.css'
import BarChart from './BarChart'
import { DateRangePicker } from 'rsuite';


export default function ChartsContainer() {

    const data =[
        {
            name: 'A',
            uv: 300,
            pv: 400,
            amt: 2400,
        },
        {
            name: 'B',
            uv: 450,
            pv: 550,
            amt: 1234,
        },
        {
            name: 'C',
            uv: 1035.56,
            pv: 1135.56,
            amt: 7892,
        },
        {
            name: 'D',
            uv:450,
            pv: 550,
            amt: 2400,
        },
        {
            name: 'E',
            uv: 300,
            pv: 400,
            amt: 1234,
        }
    ]
  return (
    <div className={styles.container}>
    <div className={styles.cards}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <div className={styles.title_date}>
                        <div className= {styles.title}>
                            Title
                        </div>
                        <div className={styles.date}>
                            <DateRangePicker size='sm' placeholder="Select Date Range" oneTap/>
                        </div>
                    </div>
                    <div className={styles.chart}>
                        <BarChart data={data} />
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
