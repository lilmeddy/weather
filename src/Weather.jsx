import "./Weather.css"
import React, { useState } from 'react';
import axios from 'axios'; 

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const apiKey = '39c1e69d2cdfabddffc2a7c4f3ce1199'; 

  const fetchWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`)
    
      .then(response => {
        if (response.data) {
            setWeatherData(response.data);
          
        }else{
            console.log('City not found');
        }
        
      })
      .catch(error => {
        console.error(error);
        setWeatherData(null);
      });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
  type="text"
  placeholder="Enter country code (e.g., US, IN)"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
