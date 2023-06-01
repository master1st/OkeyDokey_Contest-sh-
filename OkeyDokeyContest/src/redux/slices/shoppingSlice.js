import {createSlice} from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    currentId: 4,
    shoppings: [],
    is_pack: false,
    orderNumber: 0,
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
    resetShopping: state => {
      state.shoppings = [];
    },

    setIsPack: (state, action) => {
      const item = action.payload;
      state.is_pack = item;
      console.log(state.is_pack);
    },
    addOrderNumber: (state, action) => {
      if (state.orderNumber > 100) {
        state.orderNumber = 0;
      } else {
        state.orderNumber += 1;
      }
      console.log(state.orderNumber);
    },
    resetOrderNumber: (state, action) => {
      state.orderNumber = state.orderNumber - 1;
    },
    updateOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export default shoppingSlice.reducer;
export const {
  addShopping,
  plusShopping,
  minusShopping,
  deleteShopping,
  resetShopping,
  setIsPack,
  addOrderNumber,
  resetOrderNumber,
  updateOrderNumber,
} = shoppingSlice.actions;
