import {configureStore} from '@reduxjs/toolkit';
import shoppingReducer from './slices/shoppingSlice';
import ItemSlice from './slices/ItemSlice';
export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});


export const ItemStore = configureStore({
  reducer: {
    drinkItem : ItemSlice,
  },

});