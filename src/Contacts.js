import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';

function Contacts() {
  return (
    <div id={'contacts'} className={styles.contacts}>
      <Fade bottom>
        <div className={styles.container}>
          {/*<span className={styles.blockTitle}>Contacts</span>*/}
          <div className={styles.headerTitle}>
            <h2 className={styles.headerTitle}>Contact me</h2>
            <div className={styles.line}></div>
          </div>
          <form className={styles.formWrapper}>
            <input className={styles.formArea} placeholder="Name" type="text"></input>
            <input className={styles.formArea} placeholder="e-mail" type="email"></input>
            <textarea className={styles.messageArea} placeholder="Message"></textarea>
            <button className={styles.btnSubmit} type="submit">Send</button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contacts;
