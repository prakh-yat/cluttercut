// LandingPage.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import bg_image from '../assets/img/background.png';
import styles from './landingpage.module.css';
import { MdOutlineStart, MdOutlinePhoneInTalk  } from "react-icons/md";
import Modal from '../modal/modal';
import DashboardHeader from '../components/DashboardHeader';
export default function LandingPage() {


    const [noiseIndex, setNoiseIndex] = useState(0);
    const [knowledgeIndex, setKnowledgeIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const noiseWordList = ["Noise", "Clutter","Words","Clutter","Dialogue"];
    const knowledgeWordList = ["KNOWLEDGE", "INSIGHTS","WISDOM","CLARITY","DATA"];

    useEffect(() => {
        const noiseInterval = setInterval(() => {
            setNoiseIndex(prevIndex => (prevIndex + 1) % noiseWordList.length);
        }, 1000);

        const knowledgeInterval = setInterval(() => {
            setKnowledgeIndex(prevIndex => (prevIndex + 1) % knowledgeWordList.length);
        }, 2000);

        return () => {
            clearInterval(noiseInterval);
            clearInterval(knowledgeInterval);
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.pagemain}>
            <Header />
            <div className={styles.bgimage}>
                <img src={bg_image} alt="Background" />
            </div>
            {/* <video className={styles.video} autoPlay loop muted >
                <source src="/fog.mp4" type="video/mp4" />
            </video> */}

            <div className={styles.outerbox}>
                <div className={styles["description"]}>
                    <div className={styles["primary"]}>From <span className={styles.glitch}><span aria-hidden="true">NOISE</span>NOISE<span aria-hidden="true">NOISE</span></span> To</div>
                    <div className={styles["secondary"]}>KNOWLEDGE</div>
                    <div className={styles["tertiary"]}>Transform conversations into actionable insights with our AI-driven analytics platform.</div>
                    <div className={styles["start"]}>
                        <div className={styles["getstarted"]}>
                            <div>Get Started </div>
                            <MdOutlineStart />
                        </div>
                        <div className={styles["expert"]} onClick={openModal}>
                            <div>Talk To Expert</div>
                            <MdOutlinePhoneInTalk />
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
