import React, { useState, useEffect } from "react";
import './dashboard.css'
import CurrentWeather from '../currentWeater/CurrentWeather'
import WeatherByHours from "../WeatherByHours/WeatherByHours";
import WeekWeather from "../WeekWeather/WeekWeather";
import { useContext } from 'react';
import WeatherContext from '../../components/WeatherContext';
import dayImg from '../../imgs/day-sky.png'
import nightImg from '../../imgs/night-sky.png'


function Dashboard () {
  const { currWeather, forecast } = useContext(WeatherContext);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 18) {
      setBackgroundImage(dayImg);
    } else {
      setBackgroundImage(nightImg);
    }
  }, []);
  return (
    
    <div className="dashboard" style={{ backgroundImage: `url(${backgroundImage})` } } >
      <div className="top" >
        <div className="section current-weather">
        { currWeather && <CurrentWeather data = {currWeather} />} 
        </div>
        <div className="section weather-by-hours" >
        { forecast && <WeatherByHours data = {forecast} />}
        </div>
      </div>
      <div className="bottom" >
        <div className="section week-weather" >
        { forecast && <WeekWeather data = {forecast} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;