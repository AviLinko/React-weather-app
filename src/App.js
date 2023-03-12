import { useState } from 'react';
import './App.css';
import Header from './pages/SearchHeader'
import Dashboard from "./pages/Dashboard"
import WeatherContext from '../src/components/WeatherContext';

function App() {
  const [currWeather,setCurrWeather] = useState(null);
  const [forecast,setForecast] = useState(null);
  return ( 
    <WeatherContext.Provider value={{ currWeather, forecast, setCurrWeather,setForecast }}>
     <Header/>
     <Dashboard/>
    </WeatherContext.Provider>
  );
}

export default App;
