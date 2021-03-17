import React from 'react';

import './CartItem.css';

const CartItem = ({ image, title, quantity, price }) => {
  return (
    <div className="page">
      <div className="container">
        <div className="cart-item">
          <div className="image-container">
            <img src={image} alt="item"></img>
          </div>
          <div className="title">{title}</div>
          <div className="change-quantity">
            <div className="reduce">
              <button className="btn">&#60;</button>
            </div>
            <div className="quantity">{quantity}</div>
            <div className="add">
              <button className="btn">&#62;</button>
            </div>
          </div>
          <div className="price">&#8360;{price}</div>
          <div className="remove">
            <button className="btn">&#10060;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
