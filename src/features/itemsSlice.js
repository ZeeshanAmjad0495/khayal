import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = [...action.payload];
    },
  },
  extraReducers: {},
});

export const { setItems } = itemsSlice.actions;

export const selectItems = state => state.item.items;
export default itemsSlice.reducer;
