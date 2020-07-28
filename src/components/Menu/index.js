import React from 'react';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
  return (
    <nav className='menu'>
      <a href='/'>
        <img className='logo' src={Logo} alt='DevFlix logo' />
      </a>
      <Button as='a' className='buttonLink' href='/'>
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;
