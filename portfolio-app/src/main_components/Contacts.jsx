import TechIcon from '../minor_components/TechIcon';
import styles from './Contacts.module.css';
import mail from '../img/email.png';
import location from '../img/location.png';

function Contacts() {
  return (
    <div className={styles.contacts} id="contactsId">
      <div className={styles.textSection}>
        <h3>Contacts</h3>
        <h2>You can find me here:</h2>
      </div>
      <div className={styles.btnSection}>
        <div className={styles.location}>
          <TechIcon src={location} alt={'location-logo'} />
          <div className={styles.textBox}>
            <h3>Location</h3>
            <p>Chisinau, Moldova</p>
          </div>
        </div>
        <div className={styles.mail}>
          <TechIcon src={mail} alt={'mail-logo'} />
          <div className={styles.textBox}>
            <h3>Mail</h3>
            <a href="mailto:work.radu.zamfir@gmail.com">
              work.radu.zamfir@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
