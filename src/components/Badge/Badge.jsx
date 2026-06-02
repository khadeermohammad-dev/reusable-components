import styles from "./Badge.module.css";

function Badge({ text, color = "blue", size = "medium" }) {
  return (
    <span className={`${styles.badge} ${styles[color]} ${styles[size]}`}>
      {text}
    </span>
  );
}

export default Badge;
