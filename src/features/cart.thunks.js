import { createAsyncThunk } from '@reduxjs/toolkit';
import db from '../firebase/firebase.utils';

export const setCartData = createAsyncThunk(
  'firebase/setCartData',
  ({ changes }) => {
    const docPath = `khayal-ba8b7/cart`;
    return db.doc(docPath).set(changes, { merge: true });
  }
);
