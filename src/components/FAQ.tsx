import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Is it free?",
    a: "Yes. Each account can monitor up to 10 endpoints.",
  },
  {
    q: "Do I need to sign up?",
    a: "No. Your Telegram account is your PingBot account. Open the bot, press Start, and add a URL.",
  },
  {
    q: "How quickly will I hear about an outage?",
    a: "Endpoints are checked every 60 seconds, so you'll usually get a message within a minute of something going down.",
  },
  {
    q: "What happens if my service keeps going up and down?",
    a: "You get one message each time the status changes, not one per check. It won't spam you while it's down.",
  },
  {
    q: "Can I silence an endpoint during a deploy?",
    a: "Yes. Use /pause with the endpoint's ID, then /resume when you're done. Every down alert includes the pause command for that endpoint.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className={`wrap ${styles.layout}`}>
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Questions</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
