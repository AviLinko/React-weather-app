import React from 'react';
import './weekWeather.css';

const WeekWeather = ({ data }) => {
  const forecastData = data.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="week-weather-container">
      {forecastData.map((dailyData, index) => {
        const date = new Date(dailyData.dt * 1000);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        const iconUrl = `https://openweathermap.org/img/wn/${dailyData.weather[0].icon}.png`;

        return (
          <div key={index} className="daily-card">
            <div className="day">{weekday}</div>
            <img src={iconUrl} alt="Weather Icon" className="weather-icon" />
            <div className="temperature">{parseInt(dailyData.main.temp)} °C</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekWeather;
