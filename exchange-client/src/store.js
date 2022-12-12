import { configureStore } from '@reduxjs/toolkit';
import { GlobalSlice } from './modules/shared';
import { ExchangeSlice } from './modules/core';
const reducer = {
  global: GlobalSlice.reducer,
  exchange: ExchangeSlice.reducer,
};

const store = configureStore({ reducer: reducer });

export default store;
