import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import WeatherStat from "./WeatherStat";

import windIcon from "../../assets/wind-speed-icon-6.jpg";
import uvIcon from "../../assets/illumination-icon-10.jpg";
import humidityIcon from "../../assets/humid-icon-11.jpg";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    fetchWeatherHandler();
  }, []);

  async function fetchWeatherHandler() {
    const key = "7464d8f56ed30f0467bc4d7331befa80";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${51.27656}&lon=${-0.84215}&exlude=daily&appid=${key}`
    );
    const data = await response.json();

    // add useful data to new objects
    const weather = data.current;
    setCurrentWeather({
      temp: weather.temp,
      feels: weather.feels_like,
      icon: "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png",
      windSpeed: weather.wind_speed,
      windDeg: weather.wind_deg,
      uv: weather.uvi,
      humidity: weather.humidity,
    });
  }

  const convertTemperatures = (temp) => {
    return Math.round(temp) - 271;
  }

  const getWindDirection = (degree) => {
    let direction;
    if (degree > 337.5 || degree <= 22.5) {
      direction = "N";
    } else if (degree <= 67.5) {
      direction = "NE";
    } else if (degree <= 112.5) {
      direction = "E";
    } else if (degree <= 157.5) {
      direction = "SE";
    } else if (degree <= 202.5) {
      direction = "S";
    } else if (degree <= 247.5) {
      direction = "SW";
    } else if (degree <= 292.5) {
      direction = "W";
    } else if (degree <= 337.5) {
      direction = "NW";
    }
    return direction;
  }

  const getUVIndexCategory = (uv) => {
    let category;
    if (uv <= 2) {
      category = "minimal";
    } else if (uv <= 5) {
      category = "low";
    } else if (uv <= 7) {
      category = "moderate";
    } else if (uv <= 10) {
      category = "high";
    } else {
      category = "extreme";
    }
    return category;
  };

  return (
    <section className={styles.container}>
      <figure className={styles.iconCrop}>
        <img src={currentWeather.icon} alt="weather icon"></img>
      </figure>

      <div className={styles.container__temp}>
        <div className={styles.container__temp__real}>
          <div className={styles.temp__real}>{convertTemperatures(currentWeather.temp)}</div>
          <div className={styles.temp__real__units}>°C</div>
        </div>

        <div className={styles.temp__feels}>~{convertTemperatures(currentWeather.feels)}°C</div>
      </div>

      <div className={styles.container__stats}>
        <WeatherStat icon={windIcon} stat={`${currentWeather.windSpeed}m/s ${getWindDirection(currentWeather.windDeg)}`} />
        <WeatherStat icon={uvIcon} stat={getUVIndexCategory(currentWeather.uv)} />
        <WeatherStat icon={humidityIcon} stat={`${currentWeather.humidity}%`} />
      </div>
    </section>
  );
};

export default Weather;
