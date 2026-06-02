import styles from "./Alert.module.css";

function Alert({ type = "success", message, onClose }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <p>{message}</p>
      <button onClick={onClose}>×</button>
    </div>
  );
}

export default Alert;
