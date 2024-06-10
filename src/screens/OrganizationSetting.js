import React from 'react'
import styles from './OrganizationSetting.module.css'
import { IoIosArrowBack } from "react-icons/io";
import UserLists from '../components/UserLists';

export default function OrganizationSetting() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.back_icon}>
              <IoIosArrowBack />
          </div>
          <div className={styles.title}>
            Go back to Dashboard
          </div>
      </div>
      <div className={styles.inputs}>
                        <div className={styles.fields}>
                            <div className={styles.label}>
                                Company Name
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    className={styles.input}
                                    name="company"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                        <div className={styles.fields}>
                            <div className={styles.label}>
                            Add Competitor(s) name separated by commas
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    className={styles.input}
                                    name="competitors"
                                    placeholder="For eg: Coca Cola, Facebook, Twitter, etc."
                                />
                            </div>
                        </div>
                        
                        <div className={styles.fields}>
                            <div className={styles.label}>
                            Invite users to your workspace
                            </div>
                            <div className={styles.adduser}>
                                <input
                                    className={styles.input}
                                    name="email"
                                    type='email'
                                    placeholder="johndoe@example.com"
                                />
                                <div className={styles.addbtn}>
                                  Add user
                                </div>
                            </div>
                            <div className={styles.userList}>
                                <UserLists />
                            </div>
  
                        </div>

                    </div>
                    <div className={styles.footer}>
            <div className={styles.submit}>
              Save Changes
            </div>
            <div className={styles.discard}>
              Discard
            </div>
          </div>
    </div>

  )
}
