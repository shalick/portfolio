import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectImg} style={{backround: props.img}}>
                <a className={styles.btnShow} href={props.href}>See</a>
            </div>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}

export default Project;