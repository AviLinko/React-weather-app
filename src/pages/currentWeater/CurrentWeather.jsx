import './currentWeather.css'

const CurrWeather = ({data}) => {
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    return (
      <div className="weather" >
          <div className="top">
            <div>
                <p className="city">{data.city}</p>
                <p className="description">{data.weather[0].description}</p>
            </div>
            <img alt="weather" className="weather-img" src={iconUrl} />
          </div>
          <div className="bottom">
            <p>{Math.round(data.main.temp)}℃</p>
            <p>feels like: {Math.round(data.main.feels_like)}℃</p>
          </div>
      </div>  
    );
}

export default CurrWeather;
