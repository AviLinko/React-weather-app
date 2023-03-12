import { React, useContext } from "react";
import '../style/Header.css';
import CurrWeather from '../components/CurrentWeather';
import Search from '../components/Search'
import { GoLocation } from 'react-icons/go';
import { GrMenu } from 'react-icons/gr';
import {CURR_WEATHER_URL,CURR_WEATHER_KEY} from '../components/Api';
import WeatherContext from '../components/WeatherContext';

function Header() {
  
  const { setCurrWeather, setForecast } = useContext(WeatherContext);
  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${CURR_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURR_WEATHER_KEY}&units=metric`)
    const forecastFetch = fetch(`${CURR_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURR_WEATHER_KEY}&units=metric`)
    
    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response)=> {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrWeather({city: searchData.label, ...weatherResponse});
        setForecast({city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err)); 
  }
  
  return (
      <header className="header">
        <div className="header__left">
          <button className="header__btn header__btn--menu"><GrMenu/></button>
        </div>
        <div className="header__center">
          <Search onSearchChange={handleSearchChange}/>
          
        </div>
        <div className="header__right">
          <button className="header__btn header__btn--location"><GoLocation/></button>
        </div>
      </header>
    
  );
}

export default Header;
