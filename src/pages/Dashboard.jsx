import React from "react";
import '../style/dashboard.css'
import CurrentWeather from '../components/CurrentWeather';
import WeatherByHours from "../components/WeatherByHours";
import { useContext } from 'react';
import WeatherContext from '../components/WeatherContext';


function Dashboard () {
  const { currWeather, forecast } = useContext(WeatherContext);

  return (
    <div className="dashboard" style={{ backgroundColor: "#a5b3c0" }}>
      <div className="section current-weather">
      { currWeather && <CurrentWeather data = {currWeather} />} 
      </div>
      <div className="section weather-by-hours" >
      { forecast && <WeatherByHours data = {forecast} />}
        
      </div>
      <div className="section week-weather">
        <h2>Week Weather</h2>
        
      </div>
    </div>
  );
}

export default Dashboard;