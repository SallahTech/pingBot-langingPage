import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="#" className={styles.logo}>
        <span className={styles.logoPing}>Ping</span>
        <span className={styles.logoBot}>Bot</span>
      </Link>
      <ul className={styles.links}>
        <li><Link href="#how">How it works</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#faq">FAQ</Link></li>
      </ul>
      <a
        href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Telegram →
      </a>
    </nav>
  );
}
