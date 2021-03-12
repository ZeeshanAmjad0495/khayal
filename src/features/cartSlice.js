import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartItemsQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartItemsQuantity++;
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

export const { addItemToCart, removeItem } = cartSlice.actions;
export const selectCartItems = state => state.cartItem.cartItems;
export default cartSlice.reducer;
