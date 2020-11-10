import React, { useState } from 'react';
import { FiChevronRight, FiSun, FiCloudRain, FiCloud, FiCloudSnow } from 'react-icons/fi';

import weatherApi from '../services/weatherApi';
import '../styles/pages/home.css';

interface Weather {
  temp: number,
  main: string
};

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<Weather>();

  function handleWithFetchWeather () {
    weatherApi.get(`weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`).then( res => {
      setWeather({
        temp: Math.round(res.data.main.temp),
        main: res.data.weather[0].main
      });
    });
  };

  function handleWithTemperature () {
    if (weather && weather.temp > 24) return 'Warm'
    else if (weather && weather.temp > 14) return 'Cool'
    return 'Cold';
  };

  function handleWithWeatherIcon () {
    if (weather?.main === 'Rain') return  <FiCloudRain size={150} color="#FFFFFF" />;
    else if (weather?.main === 'Clear') return <FiSun size={150} color="#FFFFFF"/>
    else if (weather?.main === 'Clouds') return <FiCloud size={150} color="#FFFFFF" />;
    else if (weather?.main === 'Snow') return <FiCloudSnow size={150} color="#FFFFFF" />;
  };

  return (
    <div id="page-home">
      <div className="content-wrapper">

        <aside className="sidebar">
          <h1>
            Cities Weather <br/> 
            Forecast
          </h1>

          <div className="search-container">
            <h2>Search a city:</h2>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Ex: Araranguá, SC, Brazil..."
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <button onClick={handleWithFetchWeather}>Search</button>
          </div>

          <div className="latest-searches-container">
            <h2>Latest searches:</h2>

            <div className="search">
              <p>Araranguá, SC, Brazil</p>

              <FiChevronRight size={30} color="#2C2C2C"/>
            </div>
          </div>
        </aside>

        <main>
          { weather &&  <>
            <img src="https://pix10.agoda.net/geo/city/17164/1_17164_02.jpg?s=1920x822" alt=""/>
            <div className="content">
              { handleWithWeatherIcon() }

              <p>{ weather?.temp }º</p>
              <span>{ weather?.main }  |  { handleWithTemperature() }</span>
            </div>
          </> }
        </main>
      </div>
    </div>
  );
}

export default Home;