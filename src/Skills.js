import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import Fade from 'react-reveal/Fade';

import css from "./assets/img/css3.png"
import js from "./assets/img//js.png"
import react from "./assets/img//react.png"
import redux from "./assets/img//redux.png"
import git from "./assets/img//git.png"
import html5 from "./assets/img//html5.png"

export const Skills = () => {

    const skills = [
        {
            id: 1,
            icon: js,
            title: 'JavaScript'
        },
        {
            id: 2,
            icon: react,
            title: 'React.JS'
        },
        {
            id: 3,
            icon: redux,
            title: 'Redux'
        },
        {
            id: 4,
            icon: html5,
            title: 'HTML5'

        },
        {
            id: 5,
            icon: css,
            title: 'CSS3'
        },
        {
            id: 6,
            icon: git,
            title: 'Git'
        }
    ];

    return (
        <div className={styles.skills} id={'skills'}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>My stack</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.skillsWrapper}>
                        {skills.map(skill => {
                            return <Skill key={skill.id} icon={skill.icon} title={skill.title}
                                          description={skill.description}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;
