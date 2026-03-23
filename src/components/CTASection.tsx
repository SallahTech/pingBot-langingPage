import TelegramIcon from "./TelegramIcon";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <div className={styles.cta}>
      <h2>
        Your API will go down.
        <br />
        You should know first.
      </h2>
      <p>Takes 3 minutes to set up. No credit card required.</p>
      <a
        href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
        className={styles.btn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
        Open PingBot in Telegram
      </a>
    </div>
  );
}
