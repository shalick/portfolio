import React from 'react';
import styles from './Main.module.css';
import profileIcon from "./assets/img/profile.jpg";

function Main() {
  return (
    <div className={styles.main} id={'main'}>
      <div className={styles.container}>
          <div className={styles.greeting}>
              <span>Hello!</span>
              <div className={styles.nameSurname}>
                  <span>I am Alick</span>
                  <span>Shabanovich</span>
              </div>
              <span>I am looking for a job as frontend developer</span>
          </div>
          <div className={styles.photo}>
             <img className={styles.image} src={profileIcon}/>
          </div>
      </div>
    </div>
  );
}

export default Main;
