import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import budgety from './assets/img/budgety.jpg';
import network from './assets/img/social_network.jpeg';
import burger from './assets/img/burger.png'
import Fade from 'react-reveal/Fade';

function Projects() {
    // const todolistImg = {
    //     backgroundImage: `url(${todolistBgImg})`
    // };

    const projects = [
        {
            id: 1,
            title: 'Social Network',
            img: network,
            link: 'https://shalick.github.io/social_network/',
            githubCode: 'https://github.com/shalick/social_network',
            description: 'Step by step from videocourse done project'
        },
        {
            id: 2,
            title: 'Budgety',
            img: budgety,
            link: 'https://shalick.github.io/budgety/',
            githubCode: 'https://github.com/shalick/budgety',
            description: 'A small JS project done for learning'
        },
        {
            id: 3,
            title: 'Burger Builder',
            img: burger,
            link: 'https://shalick.github.io/the-burger-builder',
            githubCode: 'https://github.com/shalick/the-burger-builder',
            description: 'A React-Redux project done for learning'
        }
    ];

    return (
        <div id={'projects'} className={styles.projects}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>My projects</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.projectsWrapper}>
                        {projects.map(p => {
                            return <Project key={p.id}
                                            title={p.title}
                                            img={p.img}
                                            link={p.link}
                                            githubCode={p.githubCode}
                                            description={p.description}/>
                        })}
                        {/*<Project title={"Todo list"}*/}
                        {/*         img = {"red"}*/}
                        {/*         description={"Loredfdfdf"}/>*/}
                        {/*<Project href={"https://shalick.github.io/social_network/#/"} title={"Social network"} description={"Loredfdfdf"}/>*/}
                        {/*<Project />*/}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
