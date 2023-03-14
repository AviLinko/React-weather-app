import { useState } from 'react';
import './App.css';
import Header from './pages/Header/Header'
import Dashboard from "./pages/Dashboard/Dashboard"
import WeatherContext from '../src/components/WeatherContext';


function App() {
  const [currWeather,setCurrWeather] = useState(null);
  const [forecast,setForecast] = useState(null);
  return ( 
      <div className="App">
        <WeatherContext.Provider value={{ currWeather, forecast, setCurrWeather,setForecast }}>
          <Header/>
          <Dashboard/>
        </WeatherContext.Provider>
      </div>
  );
}

export default App;
