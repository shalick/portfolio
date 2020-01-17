import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "./BlockTitle";
import telegramIcon from "./assets/img/telegram2.svg";
import linkedInIcon from "./assets/img/linkedin2.svg";
import gitHubIcon from "./assets/img/github.png";
import Fade from "react-reveal/Fade";

function Footer() {
    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div className={styles.container}>
                    {/*<BlockTitle className={styles.blockTitle}>Alick Shabanovich</BlockTitle>*/}
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>Hire me</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.socialBlock}>
                        <div className={styles.socialIcon}>
                            <a href="https://t.me/shalick">
                                <img src={telegramIcon} alt="Telegram"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://github.com/shalick">
                                <img src={gitHubIcon} alt="GitHub"/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://www.linkedin.com/in/alexander-shabanovich-07668a89/">
                                <img src={linkedInIcon} alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                    <span className={styles.copyright}>© 2019 All rights reserved</span>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
