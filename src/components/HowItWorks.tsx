import styles from "./HowItWorks.module.css";

const facts = [
  {
    term: "Checks",
    text: "Each endpoint gets an HTTP request every 60 seconds. Any URL that returns a status code works: a health route, a homepage, a webhook receiver.",
  },
  {
    term: "Alerts",
    text: "You get a message only when the status changes: down, slow, or back up. A flapping service won't flood your chat.",
  },
  {
    term: "No signup",
    text: "Your Telegram account is your PingBot account. Press Start in the bot and add a URL. There are no emails or passwords.",
  },
  {
    term: "Control",
    text: "Pause an endpoint during a deploy, resume it after, or edit and remove it, all from the chat.",
  },
];

const commands = [
  { name: "/add <url> <name>", desc: "Start monitoring an endpoint" },
  { name: "/status", desc: "List your endpoints and their current status" },
  { name: "/update <id> <url> <name>", desc: "Change an endpoint" },
  { name: "/pause <id>", desc: "Pause monitoring" },
  { name: "/resume <id>", desc: "Resume monitoring" },
  { name: "/remove <id>", desc: "Delete an endpoint" },
  { name: "/help", desc: "Show all commands" },
];

export default function HowItWorks() {
  return (
    <>
      <section id="how" className="section">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">Add a URL in the chat. PingBot does the rest.</h2>
          <dl className={styles.facts}>
            {facts.map((f) => (
              <div key={f.term} className={styles.fact}>
                <dt>{f.term}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="commands" className="section">
        <div className="wrap">
          <p className="eyebrow">Commands</p>
          <h2 className="h2">Everything happens in the chat.</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Command</th>
                <th scope="col">What it does</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((c) => (
                <tr key={c.name}>
                  <td><code>{c.name}</code></td>
                  <td>{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
