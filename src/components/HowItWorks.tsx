import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Open the bot",
    desc: "Find @pingbot_app_bot on Telegram, type /start and register with your email.",
  },
  {
    num: "02",
    title: "Add your endpoint",
    desc: "Type /add https://your-api.com and give it a name. PingBot starts monitoring immediately.",
  },
  {
    num: "03",
    title: "Get instant alerts",
    desc: "The moment your API goes down, you get a Telegram message with cause, duration, and uptime.",
  },
  {
    num: "04",
    title: "Recovery alert",
    desc: "When it comes back up, you get another message with exact downtime duration. Stay in the loop.",
  },
];

const commands = [
  { name: "/register <email> <password>", desc: "Create account" },
  { name: "/login <email> <password>", desc: "Login to existing account" },
  { name: "/status", desc: "View all endpoints with live status 🟢🔴🟡" },
  { name: "/add <url> <name>", desc: "Add endpoint to monitor" },
  { name: "/update <id> <url> <name>", desc: "Update an endpoint" },
  { name: "/pause <id>", desc: "Pause monitoring" },
  { name: "/resume <id>", desc: "Resume monitoring" },
  { name: "/remove <id>", desc: "Delete endpoint" },
  { name: "/upgrade", desc: "Upgrade to Pro plan" },
];

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.label}>How it works</div>
      <h2 className={styles.title}>
        Set up in under
        <br />3 minutes
      </h2>
      <p className={styles.sub}>
        No config files. No dashboards. Just open Telegram and type a command.
      </p>

      <div className={styles.steps}>
        {steps.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.commands}>
        <div className={styles.cmdHeader}>
          <div className={styles.cmdDots}>
            <div className={styles.cmdDot} style={{ background: "#ff5f56" }} />
            <div className={styles.cmdDot} style={{ background: "#ffbd2e" }} />
            <div className={styles.cmdDot} style={{ background: "#27c93f" }} />
          </div>
          PingBot commands
        </div>
        {commands.map((c) => (
          <div key={c.name} className={styles.cmdRow}>
            <div className={styles.cmdName}>{c.name}</div>
            <div className={styles.cmdDesc}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
