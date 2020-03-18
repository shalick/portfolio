import React from 'react';
import styles from './Skill.module.css';


function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={props.icon} alt={props.title}/>
            </div>
            <div>
                <span className={styles.skillTitle}>{props.title}</span>
            </div>
        </div>
    )
}

export default Skill;