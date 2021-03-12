import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../features/cartSlice';

const Cart = () => {
  const order = useSelector(selectCartItems);
  console.log(order);

  return <div>{order}</div>;
};

export default Cart;
