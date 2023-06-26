import styles from "./App.module.css";
import TimeDate from "./components/TimeDate";
import Weather from "./components/Weather";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      {/* empty divs for styling purposes only */}
      <div className={`${styles.bgImage} ${styles.bgFixedPos}`}></div>
      <div className={`${styles.bgVignette} ${styles.bgFixedPos}`}></div>

      <div className={`${styles.container} ${styles.bgFixedPos}`}>
        <main className={styles.app}>
          <div className={styles.info}>
            <TimeDate />
            <Weather />
          </div>
          <Tasks />
        </main>
      </div>
    </>
  );
}

export default App;
