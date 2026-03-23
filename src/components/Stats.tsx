import styles from "./Stats.module.css";

const stats = [
  { value: "60s", label: "Check interval" },
  { value: "<5s", label: "Alert delivery" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$0", label: "To get started" },
];

export default function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.num}>{s.value}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
