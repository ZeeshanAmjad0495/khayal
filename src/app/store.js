import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from '../features/itemsSlice';
import cartReducer from '../features/cartSlice';

export default configureStore({
  reducer: {
    item: itemsReducer,
    cart: cartReducer,
  },
});
