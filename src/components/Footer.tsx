import TelegramIcon from "./TelegramIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.cta}>
          <p className={styles.line}>Add your first endpoint in about a minute.</p>
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            Open PingBot in Telegram
          </a>
        </div>
        <div className={styles.meta}>
          <span>pingbot</span>
          <span>Built by Baboucarr (SallahTech)</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
