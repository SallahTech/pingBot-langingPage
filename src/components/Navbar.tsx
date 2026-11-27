import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.bar}>
      <nav className={`wrap ${styles.nav}`} aria-label="Main">
        <a href="#top" className={styles.logo}>
          <span className={styles.dot} aria-hidden="true" />
          pingbot
        </a>
        <ul className={styles.links}>
          <li><a href="#how">How it works</a></li>
          <li><a href="#commands">Commands</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a
          href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Telegram
        </a>
      </nav>
    </header>
  );
}
