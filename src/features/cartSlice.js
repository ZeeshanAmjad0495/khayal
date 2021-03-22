import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart: (state, { payload }) => {
      const existingItemIndex = state.cartItems.findIndex(
        cartItem => cartItem.title === payload.title
      );

      if (existingItemIndex !== -1) {
        const prevQuantity = state.cartItems[existingItemIndex].quantity;
        const newQuantity = prevQuantity + 1;
        state.cartItems[existingItemIndex].quantity = newQuantity;
      } else {
        state.cartItems.push(payload);
      }
    },
    reduceItemQuantity: (state, { payload }) => {
      const existingItemIndex = state.cartItems.findIndex(
        cartItem => cartItem.title === payload.title
      );

      if (existingItemIndex !== -1) {
        const prevQuantity = state.cartItems[existingItemIndex].quantity;
        const newQuantity = prevQuantity - 1;
        state.cartItems[existingItemIndex].quantity = newQuantity;
      }
    },
    removeItem: (state, action) => {
      if (state.cartItems.length <= 1) {
        state.cartItems = [];
      }
      const newArr = state.cartItems.filter(
        cartItem => cartItem.title !== action.payload
      );

      state.cartItems = [...newArr];
    },
  },
});

export const {
  addItemsToCart,
  reduceItemQuantity,
  removeItem,
} = cartSlice.actions;
export const selectCartItems = state => state.cart.cartItems;
export default cartSlice.reducer;
