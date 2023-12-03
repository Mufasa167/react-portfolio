import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Greetings, I'm Mustafa</h1>
        <p className={styles.description}>
        I'm an aspiring fullstacker, working on perfecting the art of web devolpment,
         it has been patchy at times, but please have a look!
   </p>
   <a  href="mailto:mustafakaddan@gmail.com" className={styles.contactBtn}>
    Contact me
    </a>
   </div>
    <img src={getImageUrl("hero/profile.png")}
    alt="hero-image" className={styles.heroImg}/>
    
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
};
