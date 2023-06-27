import styles from "./TimeDate.module.css";
import { useEffect, useState } from "react";

const TimeDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <section className={styles.container}>
      <div className={styles.time}>{date.toLocaleTimeString()}</div>
      <div className={styles.date}>
        {date.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </div>
    </section>
  );
};

export default TimeDate;
