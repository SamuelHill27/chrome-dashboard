import styles from "./Weather.module.css";

const Weather = () => {
  return (
    <section className={styles.container}>
      <h1>Icon</h1>
      <div className={styles.container__temp}>
        <h1>Temp</h1>
        <h1>Feels</h1>
      </div>
      <div className={styles.container__stats}>
        <h1>Stats</h1>
      </div>
    </section>
  );
};

export default Weather;