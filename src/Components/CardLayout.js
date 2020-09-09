import React, {useEffect, useState} from 'react';
import {apiKey} from "../utils/constants";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";



export default function CardLayout(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ready: false});
  const [isWeatherPopupOpen, setIsWeatherPopupOpen] = useState(false);

  function setWeatherData(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      feels_like: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000)
    })
  }

  function getApiData() {
    const apiConfig = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiConfig).then(setWeatherData);
  }

  function openForecastWeather() {
    setIsWeatherPopupOpen(true);
  }

  function closeForecastWeather() {
    setIsWeatherPopupOpen(false);
  }

  if (weather.ready) {
    return (
      <>
        <CurrentWeather
          data={weather}
          onForecastWeather={openForecastWeather}
        />
        <ForecastWeather
          data={weather}
          isOpen={isWeatherPopupOpen}
          onClose={closeForecastWeather}
          city={weather.city}
        />
      </>
    );
  } else {
    getApiData();
    return "Please wait"
  }
}