import React from 'react';
import styles from './Sidebar.module.css';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.logo}>
                    <img src='/white_logo.svg' alt='logo' />
                </div>
                <div className={styles.company_name}>
                    Company Name
                </div>
                <div className={styles.selected_links}>
                    <div className={styles.selected}>
                        <div className={styles.icon}>
                            <RiDashboardHorizontalFill />
                        </div>
                        <div className={styles.label}>
                            Dashboard
                        </div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.org_setting}>
                            Organization Settings
                        </div>
                        <div className={styles.logout} onClick={handleLogout}>
                            Log out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
