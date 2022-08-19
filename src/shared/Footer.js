import React from 'react';
//styles
import styles from './Footer.module.css'
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import telegram from '../assets/icons/telegram.svg'
import linkedin from '../assets/icons/linkedin.svg'
const Footer = () => {
    return (
       <>
        <div className={styles.container}>
        <p> &copy; All Rights Reserve 2022</p>
        <div className={styles.icons}>
            
            <a href='https://www.instagram.com/elahe_soltani78/' className={`${styles.icon} ${styles.iconinstagram}`}>
            <img src={instagram} alt="instagram"/>
            </a>
            <a href='https://t.me/Elahe_soltani78' className={`${styles.icon} ${styles.iconTelegram}`}>
            <img src={telegram} alt="telegram"/> 
            </a>
            <a href='https://github.com/elahe-soltani/' className={`${styles.icon} ${styles.iconGithub}`}>
            <img src={github} alt="github"/>
            </a>
            <a href='https://www.linkedin.com/in/elahe-soltani-71259a247' className={`${styles.icon} ${styles.iconLinkedin}`}>
            <img src={linkedin} alt="linkedin"/>
            </a>
        </div>
       </div>
      
       </> 
        
    );
};

export default Footer;