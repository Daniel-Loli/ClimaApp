// WeatherForm.jsx
import React, { useState } from 'react';
import s from './WeatherForm.module.css';

const WeatherForm = ({ fetchWeatherData }) => {
  const [ciudad, setCiudad] = useState('');

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(ciudad);
    setCiudad('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.Formulario}>
      <input
        type='text'
        placeholder='Ciudad...'
        value={ciudad}
        onChange={handleCiudadChange}
        className={s.Input}
      />
      <button type='submit' className={s.Btn}>
        Buscar
      </button>
    </form>
  );
};

export default WeatherForm;
  