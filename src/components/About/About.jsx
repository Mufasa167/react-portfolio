import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">

      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>

        <img src={getImageUrl("about/aboutImage1.png")}
         alt="A literal boat lol" className={styles.aboutImg}/>

         <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>

            <img src={getImageUrl("about/cursorIcon.png")}
          alt="cursor icon bruv"/>

          <div className={styles.aboutItemText}>
   
            <h3>FrontEnd Dev</h3>

            <p>Fairly good, attention to detail is a must</p>

          </div>

         </li>
         
         
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")}
          alt="server icon bruv"/>
          <div className={styles.aboutItemText}>
            <h3>BackEnd Dev</h3>
            <p>Still in baby steps, alot of improvment required</p>
          </div>
         </li>
         

         
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")}
          alt="ui icon bruv"/>
          <div className={styles.aboutItemText}>
            <h3>UI designer</h3>
            <p>We want the user to feel, as if the project was designed by him/her.
              Very flexible in adapting with the costumer's needs.
            </p>
          </div>
         </li>
         </ul>
      </div>
    </section>
  )
}
