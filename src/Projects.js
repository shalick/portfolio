import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import todolistBgImg from './assets/img/todolist.jpg';
import Fade from 'react-reveal/Fade';

function Projects() {
    const todolistImg = {
        backgroundImage: `url(${todolistBgImg})`
    };
    return (
        <div id={'projects'} className={styles.projects}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>My projects</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.projectsWrapper}>
                        <Project title={"Todo list"}
                                 img = {"red"}
                                 description={"Loredfdfdf"}/>
                        <Project href={"https://shalick.github.io/social_network/#/"} title={"Social network"} description={"Loredfdfdf"}/>
                        <Project />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
