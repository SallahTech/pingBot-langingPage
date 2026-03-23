import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>PingBot</div>
      <div>Built for indie hackers. Made with ♥</div>
      <div>© 2025 PingBot</div>
    </footer>
  );
}
