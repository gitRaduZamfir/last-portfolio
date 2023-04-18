import styles from './LinkButton.module.css';

function LinkButton({ children, color }) {
  return (
    <div className={styles.linkBtn}>
      <i
        className={styles.link}
        style={{ color: color }}
        target="_blanc"
        rel="noreferrer"
      >
        {children}
      </i>
    </div>
  );
}

export default LinkButton;
