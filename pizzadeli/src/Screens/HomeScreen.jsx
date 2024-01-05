import React from 'react';
import Header from '../Components/Header';
//import WeatherInfo from '../Components/WeatherInfo.jsx';
//import WeatherForm from '../Components/WeatherForm.jsx';
import WeatherApp from '../Components/WeatherApp.jsx';

import s from './HomeScreen.module.css'

const HomeScreen = () => {
  return (
    <div className={s.container}>
        <Header />
        <WeatherApp />

    </div>
  )
}

export default HomeScreen