import styles from './TechIcon.module.css';

function TechIcon({ src, alt }) {
  return (
    <div className={styles.techContainer}>
      <img src={src} alt={alt} className={styles.techIcon} />
    </div>
  );
}

export default TechIcon;
