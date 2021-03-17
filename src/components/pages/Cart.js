import React from 'react';
import { useSelector } from 'react-redux';

import db from '../../firebase/firebase.utils';
import CartItem from '../CartItem';

import { selectCartItems } from '../../features/cartSlice';

import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart">
      <div className="headings">
        <div>
          <h1>Cart</h1>
        </div>
        <div>
          <h3>Items</h3>
        </div>
        <div>
          <h3>Price</h3>
        </div>
      </div>
      <div className="cart-items">
        {cartItems.map(({ image, title, price, quantity }) => (
          <CartItem
            key={title}
            image={image}
            title={title}
            price={price}
            quantity={quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
