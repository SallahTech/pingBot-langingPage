import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className="section">
      <div className={`wrap ${styles.story}`}>
        <p className="eyebrow">Why it exists</p>
        <div className={styles.body}>
          <p>
            At work I didn&apos;t have access to our AWS console, so when one of our
            development backends went down I usually found out from a broken screen
            or a message from a teammate.
          </p>
          <p>
            I built PingBot so I&apos;d hear about it first. It watches our dev backends
            and messages me in Telegram the moment one stops responding. I pass it on
            to our DevOps engineer, and usually it&apos;s being fixed before anyone else
            notices.
          </p>
          <p className={styles.sign}>Baboucarr, SallahTech</p>
        </div>
      </div>
    </section>
  );
}
