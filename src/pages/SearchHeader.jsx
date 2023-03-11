import { React,useState} from "react";
import '../style/Header.css';
import CurrentWeather from '../components/CurrentWeather';
import Search from '../components/Search'
import { GoLocation } from 'react-icons/go';
import { GrMenu } from 'react-icons/gr';
import {CURR_WEATHER_URL,CURR_WEATHER_KEY} from '../components/Api';
function Header() {
  
  const [currWeather,setCurrWeather] = useState(null);
  const [forecast,setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${CURR_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURR_WEATHER_KEY}&units=metric`)
    const forecastFetch = fetch(`${CURR_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURR_WEATHER_KEY}&units=metric`)
    
    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response)=> {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrWeather({city: searchData.labal, ...weatherResponse});
        setForecast({city: searchData.labal, ...forecastResponse});
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
