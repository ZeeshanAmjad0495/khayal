import { createSlice } from '@reduxjs/toolkit';
import db from '../firebase/firebase.utils';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        cartItem => cartItem.title === action.payload.title
      );

      if (existingItemIndex !== -1) {
        const prevQuantity = state.cartItems[existingItemIndex].quantity;
        const newQuantity = prevQuantity + 1;
        state.cartItems[existingItemIndex].quantity = newQuantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      if (state.cartItems.length <= 1) {
        state.cartItems = [];
      }
      const newArr = state.cartItems.filter(item => item.id !== action.payload);

      state.cartItems = [...newArr];
    },
  },
});

export const { addItemsToCart, removeItem } = cartSlice.actions;
export const selectCartItems = state => state.cartItem.cartItems;
export default cartSlice.reducer;
