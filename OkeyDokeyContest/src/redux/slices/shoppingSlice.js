import {createSlice} from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    currentId: 4,
    shoppings: [],
  },
  reducers: {
    addShopping: (state, action) => {
      // state.shoppings.map(item => {
      //   console.log(item);
      // });
      if (
        state.shoppings.some(item => item.title === action.payload.title) &&
        state.shoppings.some(item => item.ice === action.payload.ice) &&
        state.shoppings.some(item => item.size === action.payload.size)
      ) {
        var a = state.shoppings.filter(
          item =>
            item.title === action.payload.title &&
            item.ice === action.payload.ice &&
            item.size === action.payload.size,
        );
        console.log(a[0].id);
        const item = state.shoppings.findIndex(item => item.id === a[0].id);
        state.shoppings[item].quantity += 1;
        state.shoppings.push(state.shoppings.splice(item, 1)[0]);
      } else {
        state.shoppings.push({
          id: state.currentId++,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity,
          imgsrc: action.payload.imgsrc,
          ice: action.payload.ice,
          size: action.payload.size,
        });
      }
    },
    plusShopping: (state, action) => {
      console.log(2);
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
