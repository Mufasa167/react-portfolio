import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:myemail@email.com">mustafakaddan@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="https://www.linkedin.com/myname">linkedin.com/Mustafa</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://www.github.com/Mufasa167">https://github.com/Mufasa167?tab=repositories</a>
            </li>
          </ul>
          <form>
          <label>
             Full-Name:
              <input type="text" name="name" />
            </label>
            <li></li>
            <label>
             Email:
              <input type="text" email="email" />
            </label>
              <input type="submit" value="Submit" />
          </form>
        </footer>
      );
}
