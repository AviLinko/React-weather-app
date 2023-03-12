// WeatherContext.js
import { createContext } from 'react';

const WeatherContext = createContext({
  currWeather: null,
  forecast: null,
});

export default WeatherContext;