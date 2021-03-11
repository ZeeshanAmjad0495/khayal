import React from 'react';

import { ShoppingCartOutlined } from '@material-ui/icons';

import ReactLogo from './khayal.svg';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={ReactLogo} alt="khayal logo" className="khayal-logo" />
      </div>
      <div className="cart-icon">
        <ShoppingCartOutlined className="shopping-cart-outlined" />
      </div>
    </div>
  );
};

export default Header;
