import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;

// name별로 변수에 정리하는 코드
export const selectCafeLatte = (state) => state.items.find((item) => item.name === '카페라떼');
export const selectCafeMocha = (state) => state.items.find((item) => item.name === '카페모카');
export const selectVanillaLatte = (state) => state.items.find((item) => item.name === '바닐라라떼');
export const selectCaramelMacchiato = (state) => state.items.find((item) => item.name === '카라멜마끼아또');