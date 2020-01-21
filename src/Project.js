import React from 'react';
import styles from './Project.module.css';

// function Project(props) {
//     return (
//         <div className={styles.project}>
//             <div className={styles.projectImg} style={{backround: props.img}}>
//                 <a className={styles.btnShow} href={props.href}>See</a>
//             </div>
//             <span className={styles.projectTitle}>{props.title}</span>
//             <span className={styles.description}>{props.description}</span>
//         </div>
//     )
// }

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectImg}>
                <img className={styles.workScreen} src={props.img} alt={props.img}/>
                <div className={`${styles.btnShow} ${styles.watch}`}>
                    <a href={props.link} target='_blank'>See</a>
                </div>
                <div className={`${styles.btnShow} ${styles.code}`}>
                    <a href={props.githubCode} target='_blank'>Code</a>
                </div>
            </div>
            <div className={styles.projectTitle}>{props.title}</div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    )
};


export default Project;