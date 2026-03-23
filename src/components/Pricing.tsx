import styles from "./Pricing.module.css";

const freePlan = [
  { text: "Up to 3 endpoints", included: true },
  { text: "60s check interval", included: true },
  { text: "Instant Telegram alerts", included: true },
  { text: "Uptime tracking", included: true },
  { text: "Unlimited endpoints", included: false },
  { text: "Priority support", included: false },
];

const proPlan = [
  { text: "Unlimited endpoints", included: true },
  { text: "60s check interval", included: true },
  { text: "Instant Telegram alerts", included: true },
  { text: "Uptime tracking", included: true },
  { text: "Priority support", included: true },
  { text: "7-day free trial", included: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.label}>Pricing</div>
      <h2 className={styles.title}>Simple, honest pricing</h2>
      <p className={styles.sub}>
        Start free. Upgrade when you&apos;re ready. No hidden fees.
      </p>

      <div className={styles.grid}>
        {/* Free */}
        <div className={styles.plan}>
          <div className={styles.planName}>FREE</div>
          <div className={styles.planPrice}>
            <sup></sup>$0<span> / forever</span>
          </div>
          <hr className={styles.divider} />
          <ul className={styles.features}>
            {freePlan.map((f) => (
              <li key={f.text} className={f.included ? "" : styles.off}>
                {f.text}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
            className={styles.btnFree}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start free
          </a>
        </div>

        {/* Pro */}
        <div className={`${styles.plan} ${styles.planPro}`}>
          <div className={styles.planBadge}>Most popular</div>
          <div className={styles.planName}>PRO</div>
          <div className={styles.planPrice}>
            <sup>$</sup>5<span> / month</span>
          </div>
          <hr className={styles.divider} />
          <ul className={styles.features}>
            {proPlan.map((f) => (
              <li key={f.text}>{f.text}</li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_UPGRADE_URL}
            className={styles.btnPro}
            target="_blank"
            rel="noopener noreferrer"
          >
            Upgrade to Pro →
          </a>
        </div>
      </div>
    </section>
  );
}
