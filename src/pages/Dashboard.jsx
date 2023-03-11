import React from "react";
import '../style/dashboard.css'
import CurrentWeather from '../components/CurrentWeather';

function Dashboard(props) {
  const { currWeather } = props;
  return (
    <div className="dashboard" style={{ backgroundColor: "#a5b3c0" }}>
      <div className="section current-weather">
      {/* {currWeather && <CurrentWeather data={currWeather} />} */}
        
      </div>
      <div className="section weather-by-hours">
        <h2>Weather by Hours</h2>
        
      </div>
      <div className="section week-weather">
        <h2>Week Weather</h2>
        
      </div>
    </div>
  );
}

export default Dashboard;