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
          <LinkButton
            children={<BsFacebook />}
            color={'#ffffff'}
            link={'https://www.facebook.com/RaduZamfir23'}
          />
          <LinkButton
            children={<BsTelegram />}
            color={'#ffffff'}
            link={'https://t.me/raduzamfir23'}
          />
          <LinkButton
            children={<BsGithub />}
            color={'#ffffff'}
            link={'https://github.com/gitRaduZamfir'}
          />
          <LinkButton
            children={<BsLinkedin />}
            color={'#ffffff'}
            link={'https://www.linkedin.com/in/radu-zamfir-713788271/'}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
