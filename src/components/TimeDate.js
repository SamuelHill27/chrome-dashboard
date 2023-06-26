import styles from "./TimeDate.module.css";

const TimeDate = () => {
  const [time, setTime] = useState();

  

  return (
    <section className={styles.container}>
      <div className={`${styles.time} ${styles.container}`}>Time</div>
      <div className={`${styles.date} ${styles.container}`}>Date</div>
    </section>
  );
};

export default TimeDate;
