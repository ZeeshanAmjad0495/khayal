import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
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

export const { addItem, removeItem } = cartSlice.actions;
export const selectCartItems = state => state.items.cartItems;
export default cartSlice.reducer;
