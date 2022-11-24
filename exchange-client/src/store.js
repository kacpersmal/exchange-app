import { configureStore } from '@reduxjs/toolkit';
import GlobalSlice from './global-slice';
import { ExchangeSocketSlice } from './modules/core';
const reducer = {
  global: GlobalSlice.reducer,
  exchangeSocket: ExchangeSocketSlice,
};

const store = configureStore({ reducer: reducer });

export default store;
