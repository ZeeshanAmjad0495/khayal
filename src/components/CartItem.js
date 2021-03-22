import React from 'react';
import { useDispatch } from 'react-redux';

import {
  addItemsToCart,
  reduceItemQuantity,
  removeItem,
} from '../features/cartSlice';
import './CartItem.css';

const CartItem = ({ image, title, quantity, price }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    const item = { title, quantity };
    dispatch(removeItem(item));
  };

  const onAdd = () => {
    const item = { title };
    dispatch(addItemsToCart(item));
  };

  const onReduce = () => {
    const item = { title, quantity };
    console.log(quantity);
    quantity === 1
      ? dispatch(removeItem(item))
      : dispatch(reduceItemQuantity(item));
  };

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
              <button className="btn" onClick={onReduce}>
                &#60;
              </button>
            </div>
            <div className="quantity">{quantity}</div>
            <div className="add">
              <button className="btn" onClick={onAdd}>
                &#62;
              </button>
            </div>
          </div>
          <div className="price">&#8360;{price}</div>
          <div className="remove">
            <button className="btn" onClick={onRemove}>
              &#10060;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
