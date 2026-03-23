"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Do I need to install anything?",
    a: "No. Everything runs through Telegram. Just open the bot, type a command, and you're monitoring. No apps, no config files, no dashboards.",
  },
  {
    q: "How fast are the alerts?",
    a: "PingBot checks your endpoints every 60 seconds. When it detects downtime, the Telegram message is sent within seconds. Most users receive alerts in under 5 seconds of a failure.",
  },
  {
    q: "What counts as an endpoint?",
    a: "Any HTTP/HTTPS URL — your API health endpoint, your website homepage, a webhook receiver. If it returns a response code, PingBot can monitor it.",
  },
  {
    q: "Will I get spammed if my API is flapping?",
    a: "No. PingBot only alerts on status change — one alert when it goes down, one when it recovers. You won't get a flood of messages for intermittent issues.",
  },
  {
    q: "Can I cancel my Pro subscription?",
    a: "Yes, anytime. Cancel directly through Stripe — no need to email us. Your plan downgrades at the end of the billing period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.label}>FAQ</div>
      <h2 className={styles.title}>Questions</h2>

      <div className={styles.faq}>
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
            onClick={() => toggle(i)}
          >
            <div className={styles.question}>{item.q}</div>
            <div className={styles.answer}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
