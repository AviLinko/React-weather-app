import React from 'react';
import './weatherByHours.css';

const WeatherByHours = ({ data }) => {
  const today = new Date();
  const startHour = today.getHours();
  const endHour = startHour + 12;
  const temperatureData = data.list.slice(startHour, endHour + 1);

  return (
    <div className="forecast-container">
      {temperatureData.map((hourlyData, index) => {
        const hour = hourlyData.dt_txt.split(' ')[1].slice(0, 5);
        const iconUrl = `https://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`;

        return (
          <div key={index} className="hour-card">
            <div className="hour">{hour}</div>
            <img src={iconUrl} alt="Weather Icon" className="weather-icon" />
            <div className="temperature">{parseInt(hourlyData.main.temp)} °C</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherByHours;
