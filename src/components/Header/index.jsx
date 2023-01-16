import React from 'react';
import jokeIcon from '../../images/jokes-icon.png';
import './style.css';

function Header({ title}) {
  return (
    <header>
      <h1>{title}</h1>
      <img src={jokeIcon} alt="Tiozao dando risada" />
    </header>
  )
}

export default Header
