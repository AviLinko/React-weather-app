import React from "react";
import '../style/dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard" style={{ backgroundColor: "#a5b3c0" }}>
      <div className="section current-weather">
        <h2>Current Weather</h2>
        
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