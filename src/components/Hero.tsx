import TelegramIcon from "./TelegramIcon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>
        <div className={styles.dot} /> Now in beta — free to start
      </div>

      <h1 className={styles.title}>
        API monitoring that
        <br />
        lives in <em>Telegram</em>
      </h1>

      <p className={styles.sub}>
        No dashboards. No logins. Get instant alerts when your API goes down —
        directly in Telegram, where you already are.
      </p>

      <div className={styles.actions}>
        <a
          href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
          className={styles.btnPrimary}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
          Start free in Telegram
        </a>
        <a href="#how" className={styles.btnSecondary}>
          See how it works
        </a>
      </div>

      {/* Telegram Mockup */}
      <div className={styles.mockupWrap}>
        <div className={styles.tgWindow}>
          <div className={styles.tgHeader}>
            <div className={styles.tgAvatar}>P</div>
            <div>
              <div className={styles.tgName}>PingBot</div>
              <div className={styles.tgStatus}>● online</div>
            </div>
          </div>
          <div className={styles.tgBody}>
            <div className={`${styles.msg} ${styles.msgUser}`}>
              /add https://api.myapp.com/health Production API
            </div>
            <div className={`${styles.msg} ${styles.msgBot}`}>
              <span className={styles.grn}>✓</span> Monitoring started for{" "}
              <span className={styles.grn}>Production API</span>
              <br />
              <span className={styles.dim}>
                Checking every 60s · Type /status to view
              </span>
            </div>
            <div className={`${styles.msg} ${styles.msgAlert}`}>
              <span className={styles.red}>● DOWN</span>{" "}
              <strong>Production API</strong>
              <br />
              <span className={styles.dim}>
                api.myapp.com · Down since 03:14 UTC
              </span>
              <br />
              <span className={styles.dim}>
                Error: Connection timeout (5000ms)
              </span>
              <br />
              <span className={styles.dim}>Last 24h uptime: 99.2%</span>
            </div>
            <div className={`${styles.msg} ${styles.msgRecover}`}>
              <span className={styles.grn}>● RECOVERED</span>{" "}
              <strong>Production API</strong>
              <br />
              <span className={styles.dim}>
                Back online · Downtime: 3 min 41s
              </span>
            </div>
            <div className={styles.msgTime}>now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
