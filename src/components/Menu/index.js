import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
  return (
    <nav className='menu'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='DevFlix logo' />
      </Link>
      <Button as={Link} className='buttonLink' to='/cadastro/video'>
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;
