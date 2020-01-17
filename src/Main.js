import React from 'react';
import styles from './Main.module.css';
import profileIcon from "./assets/img/vader.jpeg";

function Main() {
  return (
    <div className={styles.main}>
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
