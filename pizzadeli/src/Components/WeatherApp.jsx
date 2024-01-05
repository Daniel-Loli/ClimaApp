// WeatherApp.jsx
import React, { useState } from 'react';
import WeatherForm from './WeatherForm.jsx';
import s from './WeatherApp.module.css';
import Cards from './Cards.jsx';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (ciudad) => {
    if (ciudad.trim()) {
      const apiKey = '711b79625e5358f4dbea26a3bce52351';  // Reemplaza con tu clave API real
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
          temperature={weatherData?.main?.temp}
          humidity={weatherData?.main?.humidity}
          latitude={weatherData?.coord?.lat}
          longitude={weatherData?.coord?.lon}
          imageUrl="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default WeatherApp;
