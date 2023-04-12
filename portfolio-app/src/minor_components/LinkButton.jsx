import styles from './LinkButton.module.css';

function LinkButton({ children, color, link }) {
  return (
    <div className={styles.linkBtn}>
      <a
        className={styles.link}
        style={{ color: color }}
        href={link}
        target="_blanc"
      >
        {children}
      </a>
    </div>
  );
}

export default LinkButton;
