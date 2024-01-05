import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.Header}>
      <h1 className={s.title}>Donde la magia del clima sucede</h1>
    </header>
  )
}

export default Header