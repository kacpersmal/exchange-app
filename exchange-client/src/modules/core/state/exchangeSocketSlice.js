import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appLoading: false,
};

const ExchangeSocketSlice = createSlice({
  name: 'exchangeSocket',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.appLoading = action.payload;
    },
  },
});

export const { setLoading } = ExchangeSocketSlice.actions;
export default ExchangeSocketSlice;
