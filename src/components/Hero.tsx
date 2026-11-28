import TelegramIcon from "./TelegramIcon";
import styles from "./Hero.module.css";

// 60 checks, one per minute. The red run lines up with the outage in the chat.
const checks = Array.from({ length: 60 }, (_, i) =>
  i >= 38 && i < 43 ? "down" : i === 37 || i === 43 ? "slow" : "up",
);

export default function Hero() {
  return (
    <section id="top" className={`wrap ${styles.hero}`}>
      <div className={styles.copy}>
        <h1 className={styles.title}>Know when your API goes down, before anyone tells you.</h1>
        <p className={styles.sub}>
          PingBot checks your endpoints every 60 seconds and sends you a Telegram
          message when one stops responding, then another when it&apos;s back.
          There&apos;s nothing to install and no account to create.
        </p>
        <div className={styles.actions}>
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            Open PingBot in Telegram
          </a>
          <a href="#commands" className={styles.link}>See the commands</a>
        </div>
        <p className={styles.note}>Free, up to 10 endpoints per account.</p>
      </div>

      <figure className={styles.phone} aria-label="Example PingBot conversation in Telegram">
        <div className={styles.chatHead}>
          <div className={styles.avatar} aria-hidden="true">P</div>
          <div>
            <div className={styles.chatName}>PingBot</div>
            <div className={styles.chatSub}>bot</div>
          </div>
        </div>
        <div className={styles.chat}>
          <div className={`${styles.msg} ${styles.out}`}>
            /add https://staging.example.com/health Staging API
            <span className={styles.time}>09:12</span>
          </div>
          <div className={styles.msg}>
            ✅ Endpoint added!
            <br /><br />Name: Staging API
            <br />URL: https://staging.example.com/health
            <br /><br />Monitoring every 60 seconds.
            <span className={styles.time}>09:12</span>
          </div>
          <div className={styles.day}>Today</div>
          <div className={styles.msg}>
            🔴 <b>Staging API is DOWN</b>
            <br />URL: staging.example.com/health
            <br />Down since: 14:37 UTC
            <br />Response: 502 Bad Gateway
            <span className={styles.time}>14:37</span>
          </div>
          <div className={styles.msg}>
            🟢 <b>Staging API is back UP</b>
            <br />URL: staging.example.com/health
            <span className={styles.time}>14:52</span>
          </div>
        </div>
        <figcaption className={styles.uptime}>
          <div className={styles.uptimeHead}>
            <span>Staging API · last hour</span>
            <span className={styles.pct}>91.7%</span>
          </div>
          <div className={styles.bars} aria-hidden="true">
            {checks.map((c, i) => (
              <span key={i} className={styles[c]} />
            ))}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
