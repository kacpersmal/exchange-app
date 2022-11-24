import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exchangeItems: undefined,
  exchangeLastUpdate: undefined,
};

const ExchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeData(state, action) {
      state.exchangeItems = action.payload.Items;
      state.exchangeLastUpdate = action.payload.PublicationDate;
    },
  },
});

export const { setExchangeData } = ExchangeSlice.actions;
export default ExchangeSlice;
