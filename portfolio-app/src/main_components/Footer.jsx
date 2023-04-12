import { BsGithub, BsLinkedin, BsTelegram, BsFacebook } from 'react-icons/bs';
import styles from './Footer.module.css';
import LinkButton from '../minor_components/LinkButton';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h3>Copyright © 2023. All rights are reserved</h3>
        </div>
        <div className={styles.btnSection}>
          <a
            href="http://www.facebook.com/RaduZamfir23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkButton children={<BsFacebook />} color={'#ffffff'} />
          </a>
          <a
            href="http://t.me/raduzamfir23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkButton children={<BsTelegram />} color={'#ffffff'} />
          </a>
          <a
            href="http://github.com/gitRaduZamfir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkButton children={<BsGithub />} color={'#ffffff'} />
          </a>
          <a
            href="http://www.linkedin.com/in/radu-zamfir-713788271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkButton children={<BsLinkedin />} color={'#ffffff'} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
