import React from 'react'
import styles from './KeyCards.module.css'

export default function KeyCards({ data }) {
  return (
    <div className={styles.cards}>
    <div className={styles.container}>

        <div className={styles.box}>
            <div className={styles.content}>
                <div className= {styles.title}>
                    Resolved Conversation
                </div>
                <div className={styles.value}>
                    {data.resolved_conversation}
                </div>
            </div>

            

        </div>
        <div className={styles.box}>
            <div className={styles.content}>
                <div className= {styles.title}>
                    Unresolved Conversation
                </div>
                <div className={styles.value}>
                    {data.unresolved_conversation}
                </div>
            </div>

            

        </div>
        <div className={styles.box}>
            <div className={styles.content}>
                <div className= {styles.title}>
                    Pending Conversation
                </div>
                <div className={styles.value}>
                    {data.pending_conversation}
                </div>
            </div>

            

        </div>
    </div>
    </div>
  )
}
