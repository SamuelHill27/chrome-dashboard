import styles from "./WeatherStat.module.css";

const WeatherStat = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.icon} alt="wind speed icon" width="20"></img>
      <div>{" " + props.stat}</div>
    </div>
  );
};

export default WeatherStat;
