import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ShoppingCartOutlined } from '@material-ui/icons';

import ReactLogo from './khayal.svg';

import './Header.css';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart');
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={ReactLogo} alt="khayal logo" className="khayal-logo" />
      </div>
      <div className="cart-icon">
        <ShoppingCartOutlined
          className="shopping-cart-outlined"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Header;
