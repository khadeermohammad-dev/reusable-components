import styles from "./Card.module.css";

function Card({ title, children, footer, image }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: image ? `url(${image})` : "none",
      }}
    >
      <div className={styles.overlay}>
        {title && <h3 className={styles.title}>{title}</h3>}

        <div className={styles.content}>{children}</div>

        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}

export default Card;
