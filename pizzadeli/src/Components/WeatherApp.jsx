// WeatherApp.jsx
import React, { useState } from 'react';
import WeatherForm from './WeatherForm.jsx';
import s from './WeatherApp.module.css';
import Cards from './Cards.jsx';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (ciudad) => {
    if (ciudad.trim()) {
      const apiKey = '711b79625e5358f4dbea26a3bce52351';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
          console.log(data);
        } else {
          console.error("Error al obtener datos:", data.message);
          setWeatherData(null);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error.message);
        setWeatherData(null);
      }
    }
  };

  return (
    <div>
      <WeatherForm fetchWeatherData={fetchWeatherData} />
      
      <div className={s.container}>
        {weatherData && (
          <div>
            <h2>Información del clima en {weatherData.name}, {weatherData.sys.country}</h2>
          </div>
        )}

        <Cards
          name={weatherData?.name}  
          content={weatherData?.main?.temp !== undefined ? (weatherData.main.temp - 273.15).toFixed(2) : ' '}
          humedity={weatherData?.main?.humidity !== undefined ? weatherData.main.humidity.toFixed(2) : ' '}
          lat={weatherData?.coord?.lat !== undefined ? weatherData.coord.lat.toFixed(2) : ' '}
          lon={weatherData?.coord?.lon !== undefined ? weatherData.coord.lon.toFixed(2) : ' '} 
          imageUrl="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default WeatherApp;