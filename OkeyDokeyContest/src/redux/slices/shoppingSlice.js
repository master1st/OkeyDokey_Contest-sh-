import {createSlice} from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    currentId: 4,
    shoppings: [],
  },
  reducers: {
    addShopping: (state, action) => {
      state.shoppings.push({
        id: state.currentId++,
        title: action.payload.title,
        price: action.payload.price,
        quantity: action.payload.quantity,
        imgsrc: action.payload.imgsrc,
        ice: action.payload.ice,
        size: action.payload.size,
      });
    },
    plusShopping: (state, action) => {
      const item = state.shoppings.findIndex(
        item => item.id === action.payload,
      );
      state.shoppings[item].quantity += 1;
      state.shoppings.push(state.shoppings.splice(item, 1)[0]);
    },
    minusShopping: (state, action) => {
      const item = state.shoppings.findIndex(
        item => item.id === action.payload,
      );
      state.shoppings[item].quantity -= 1;
      state.shoppings.push(state.shoppings.splice(item, 1)[0]);
    },
    deleteShopping: (state, action) => {
      const item = state.shoppings.findIndex(
        item => item.id === action.payload,
      );
      if (item > -1) {
        state.shoppings.splice(item, 1);
      }
    },
  },
});

export default shoppingSlice.reducer;
export const {addShopping, plusShopping, minusShopping, deleteShopping} =
  shoppingSlice.actions;
