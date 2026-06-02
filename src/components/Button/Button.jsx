import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
