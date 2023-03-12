import React from 'react';
import '../style/weatherByHours.css'

const WeatherByHours = ({ data }) => {
  const today = new Date();
  const startHour = today.getHours();
  const endHour = 23;
  const temperatureData = data.list.slice(startHour, endHour + 1);

  return (
    <div className="forecast-container">
      {temperatureData.map((hourlyData, index) => {
        const hour = hourlyData.dt_txt.split(' ')[1].slice(0, 5);

        return (
          <div key={index} className="hour-card">
            <div className="hour">{hour}</div>
            <div className="temperature">{hourlyData.main.temp} °C</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherByHours;