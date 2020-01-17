import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import reactIcon from "./assets/img/react.svg";
import jsIcon from "./assets/img/js.svg";
import htmlIcon from "./assets/img/html.svg";
import Fade from 'react-reveal/Fade';


function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    return (
        <div id={'skills'} className={styles.skills}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>My skills</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.skillsWrapper}>
                        <Skill icon={js} title={"JavaScript"} description={"Courses"}/>
                        <Skill icon={html} title={"HTML&CSS"} description={"Courses"}/>
                        <Skill icon={react} title={"React"} description={"Courses"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
