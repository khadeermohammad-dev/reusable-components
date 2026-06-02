import styles from "./Input.module.css";

function Input({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default Input;
